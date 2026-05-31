import prisma from "../lib/prisma.js";
import {
  analyzeMistakeMemory,
  generateTopic,
} from "../services/mistake_memory_aI.service.js";

import { STATUS } from "../constants/statusCodes.js";
import { MESSAGES } from "../constants/messages.js";
import {
  successResponse,
  errorResponse,
} from "../constants/apiResponses.js";

export const createSubmission = async (req, res) => {
  try {
    const { userId } = req.user;
    const { promptId, title, genre, body } = req.body;

    if (!body?.trim()) {
      return errorResponse(
        res,
        MESSAGES.BODY_REQUIRED,
        STATUS.BAD_REQUEST
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return errorResponse(
        res,
        MESSAGES.USER_NOT_FOUND,
        STATUS.NOT_FOUND
      );
    }

    if (!user.profile) {
      return errorResponse(
        res,
        MESSAGES.PROFILE_REQUIRED,
        STATUS.PRECONDITION_REQUIRED,
        { requiresProfile: true }
      );
    }

    const wordCount = body.trim().split(/\s+/).length;

    const submission = await prisma.submission.create({
      data: {
        user: {
          connect: { id: userId },
        },
        prompt: promptId
          ? {
              connect: { id: promptId },
            }
          : undefined,
        title: title || null,
        genre,
        body,
        wordCount,
        status: "PENDING",
      },
    });

    const { addSubmissionJob } = await import("../config/queue.js");

    await addSubmissionJob({
      submissionId: submission.id,
      userId,
      content: body,
      genre,
      userProfile: user.profile,
    });

    return successResponse(
      res,
      {
        submissionId: submission.id,
        status: "PENDING",
      },
      MESSAGES.SUBMISSION_CREATED,
      STATUS.CREATED
    );
  } catch (error) {
    console.error("Error creating submission:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getSubmissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const submission = await prisma.submission.findFirst({
      where: {
        id,
        userId,
      },
      select: {
        id: true,
        status: true,
        analysisJson: true,
        errorMessage: true,
        completedAt: true,
        createdAt: true,
        title: true,
        genre: true,
        body: true,
        wordCount: true,
        mistakes: true,
      },
    });

    if (!submission) {
      return errorResponse(
        res,
        MESSAGES.SUBMISSION_NOT_FOUND,
        STATUS.NOT_FOUND
      );
    }

    return successResponse(
      res,
      {
        submissionId: submission.id,
        status: submission.status,
        analysis: submission.analysisJson,
        errorMessage: submission.errorMessage,
        completedAt: submission.completedAt,
        createdAt: submission.createdAt,
        title: submission.title,
        genre: submission.genre,
        body: submission.body,
        wordCount: submission.wordCount,
        mistakes: submission.mistakes,
      }
    );
  } catch (error) {
    console.error("Error getting submission status:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getSubmissions = async (req, res) => {
  try {
    const { userId } = req.user;
    const { limit = 10, offset = 0 } = req.query;

    const submissions = await prisma.submission.findMany({
      where: { userId },
      select: {
        id: true,
        wordCount: true,
        createdAt: true,
        status: true,
        title: true,
        genre: true,
        _count: {
          select: {
            mistakes: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: Number(limit),
      skip: Number(offset),
    });

    return successResponse(
      res,
      {
        submissions,
      },
      MESSAGES.SUBMISSIONS_FETCHED
    );
  } catch (error) {
    console.error("Error fetching submissions:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getMistakes = async (req, res) => {
  try {
    const { userId } = req.user;
    const { pillar, subtype, dateFrom, dateTo, limit = 50 } = req.query;

    const where = {
      submission: {
        userId,
      },
    };

    if (pillar) where.pillar = pillar;
    if (subtype) where.subtype = subtype;

    if (dateFrom || dateTo) {
      where.createdAt = {};

      if (dateFrom) {
        where.createdAt.gte = new Date(dateFrom);
      }

      if (dateTo) {
        where.createdAt.lte = new Date(dateTo);
      }
    }

    const mistakes = await prisma.mistake.findMany({
      where,
      include: {
        submission: {
          select: {
            id: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: Number(limit),
    });

    return successResponse(
      res,
      {
        mistakes,
      },
      MESSAGES.MISTAKES_FETCHED
    );
  } catch (error) {
    console.error("Error fetching mistakes:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getAnalyticsSummary = async (req, res) => {
  try {
    const { userId } = req.user;
    const { window = "30d" } = req.query;

    // Calculate date range based on window
    const now = new Date();
    let dateFrom;
    switch (window) {
      case "7d":
        dateFrom = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "30d":
        dateFrom = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case "all":
        dateFrom = null;
        break;
      default:
        dateFrom = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    const where = { userId };
    if (dateFrom) {
      where.createdAt = { gte: dateFrom };
    }

    // Get submissions in window with minimal fields
    const submissions = await prisma.submission.findMany({
      where,
      select: {
        wordCount: true,
        mistakes: {
          select: {
            pillar: true,
            subtype: true
          }
        }
      },
    });

    // Calculate analytics
    const submissionsCount = submissions.length;
    const totalMistakes = submissions.reduce((sum, sub) => sum + sub.mistakes.length, 0);
    const totalWords = submissions.reduce((sum, sub) => sum + sub.wordCount, 0);
    const avgErrorDensity = totalWords > 0 ? (totalMistakes / totalWords) * 100 : 0;

    // Calculate pillar mix
    const pillarCounts = {};
    submissions.forEach((sub) => {
      sub.mistakes.forEach((mistake) => {
        pillarCounts[mistake.pillar] = (pillarCounts[mistake.pillar] || 0) + 1;
      });
    });

    const pillarMix = Object.entries(pillarCounts).map(([pillar, count]) => ({
      pillar,
      percent: (count / totalMistakes) * 100,
      count,
    }));

    // Calculate top subtypes
    const subtypeCounts = {};
    submissions.forEach((sub) => {
      sub.mistakes.forEach((mistake) => {
        const key = `${mistake.pillar}:${mistake.subtype}`;
        subtypeCounts[key] = (subtypeCounts[key] || 0) + 1;
      });
    });

    const topSubtypes = Object.entries(subtypeCounts)
      .map(([key, count]) => {
        const [pillar, subtype] = key.split(":");
        return {
          pillar,
          subtype,
          count,
          recurrenceIndex: count / submissionsCount,
        };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

      return successResponse(
        res,
        {
          window,
          submissionsCount,
          totalMistakes,
          avgErrorDensityPer100Words: avgErrorDensity,
          pillarMix,
          topSubtypes,
        },
        MESSAGES.ANALYTICS_SUMMARY_FETCHED
      );
  } catch (error) {
    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getUserStats = async (req, res) => {
  try {
    const { userId } = req.user;

    let userStats = await prisma.userStats.findUnique({
      where: { userId },
    });

    if (!userStats) {
      // Create default stats
      userStats = await prisma.userStats.create({
        data: {
          user: {
            connect: { id: userId }
          },
          totalXp: 0,
          level: 1,
          currentStreak: 0,
          longestStreak: 0,
        },
      });
    }

    // Get recent XP events
    const recentXpEvents = await prisma.xpEvent.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    return successResponse(
      res,
      {
        stats: {
          totalXp: userStats.totalXp,
          level: userStats.level,
          currentStreakDays: userStats.currentStreak,
          longestStreakDays: userStats.longestStreak,
          lastActiveDate: userStats.lastActiveDate,
        },
        recentXpEvents,
      },
      MESSAGES.USER_STATS_FETCHED
    );
  } catch (error) {
    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getWritingPrompts = async (req, res) => {
  try {
    const { genre, limit = 10 } = req.query;

    const where = { isActive: true };

    if (genre) {
      where.genre = genre;
    }

    const prompts = await prisma.writingPrompt.findMany({
      where,
      take: Number(limit),
      orderBy: {
        createdAt: "desc",
      },
    });

    return successResponse(
      res,
      {
        prompts,
      },
      MESSAGES.WRITING_PROMPTS_FETCHED
    );
  } catch (error) {
    console.error("Error fetching writing prompts:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};
export const getTopics = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return errorResponse(
        res,
        MESSAGES.USER_NOT_FOUND,
        STATUS.NOT_FOUND
      );
    }

    if (!user.profile) {
      return errorResponse(
        res,
        MESSAGES.PROFILE_REQUIRED,
        STATUS.PRECONDITION_REQUIRED,
        { requiresProfile: true }
      );
    }

    const AIResponse = await generateTopic(user.profile);

    if (!AIResponse.success) {
      return errorResponse(
        res,
        MESSAGES.TOPIC_GENERATION_FAILED,
        STATUS.INTERNAL_SERVER_ERROR,
        {
          aiError: AIResponse.error,
        }
      );
    }

    const topicData = AIResponse.data;

    return successResponse(
      res,
      {
        topic: topicData.topic,
        description: topicData.description,
        genre: topicData.genre,
        targetLevel: topicData.targetLevel,
        wordTarget: topicData.wordTarget,
        exampleStarters: topicData.exampleStarters || [],
        writingTips: topicData.writingTips || [],
      },
      MESSAGES.TOPIC_GENERATED_SUCCESSFULLY
    );
  } catch (error) {
    console.error("Error generating topic:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const getCurrentTopic = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return errorResponse(
        res,
        MESSAGES.USER_NOT_FOUND,
        STATUS.NOT_FOUND
      );
    }

    if (!user.profile) {
      return errorResponse(
        res,
        MESSAGES.PROFILE_REQUIRED,
        STATUS.PRECONDITION_REQUIRED,
        { requiresProfile: true }
      );
    }

    const activePrompt = await prisma.writingPrompt.findFirst({
      where: {
        userId,
        isActive: true,
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (activePrompt) {
      return successResponse(
        res,
        {
          id: activePrompt.id,
          topic: activePrompt.title,
          description: activePrompt.description,
          genre: activePrompt.genre,
          targetLevel: activePrompt.targetLevel,
          wordTarget: activePrompt.wordTarget || 150,
          exampleStarters: activePrompt.exampleStarters || [],
          writingTips: activePrompt.writingTips || [],
          createdAt: activePrompt.createdAt,
        },
        MESSAGES.TOPIC_GENERATED_SUCCESSFULLY
      );
    }

    const AIResponse = await generateTopic(user.profile);

    if (!AIResponse.success) {
      return errorResponse(
        res,
        MESSAGES.TOPIC_GENERATION_FAILED,
        STATUS.INTERNAL_SERVER_ERROR,
        {
          aiError: AIResponse.error,
        }
      );
    }

    const topicData = AIResponse.data;

    await prisma.writingPrompt.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
      },
    });

    const newPrompt = await prisma.writingPrompt.create({
      data: {
        user: {
          connect: { id: userId },
        },
        title: topicData.topic,
        genre: topicData.genre || "GENERAL",
        description: topicData.description,
        body: topicData.topic,
        targetLevel: topicData.targetLevel,
        exampleStarters: topicData.exampleStarters || [],
        writingTips: topicData.writingTips || [],
        isActive: true,
      },
    });

    return successResponse(
      res,
      {
        id: newPrompt.id,
        topic: newPrompt.title,
        description: newPrompt.description,
        genre: newPrompt.genre,
        targetLevel: newPrompt.targetLevel,
        wordTarget: newPrompt.wordTarget || 150,
        exampleStarters: newPrompt.exampleStarters || [],
        writingTips: newPrompt.writingTips || [],
        createdAt: newPrompt.createdAt,
      },
      MESSAGES.TOPIC_GENERATED_SUCCESSFULLY
    );
  } catch (error) {
    console.error("Error in getCurrentTopic:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const createNewTopic = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return errorResponse(
        res,
        MESSAGES.USER_NOT_FOUND,
        STATUS.NOT_FOUND
      );
    }

    if (!user.profile) {
      return errorResponse(
        res,
        MESSAGES.PROFILE_REQUIRED,
        STATUS.PRECONDITION_REQUIRED,
        { requiresProfile: true }
      );
    }

    await prisma.writingPrompt.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
      },
    });

    const AIResponse = await generateTopic(user.profile);

    if (!AIResponse.success) {
      return errorResponse(
        res,
        MESSAGES.TOPIC_GENERATION_FAILED,
        STATUS.INTERNAL_SERVER_ERROR,
        {
          aiError: AIResponse.error,
        }
      );
    }

    const topicData = AIResponse.data;

    const newPrompt = await prisma.writingPrompt.create({
      data: {
        user: {
          connect: { id: userId },
        },
        title: topicData.topic,
        genre: topicData.genre || "GENERAL",
        description: topicData.description,
        body: topicData.topic,
        targetLevel: topicData.targetLevel,
        exampleStarters: topicData.exampleStarters || [],
        writingTips: topicData.writingTips || [],
        isActive: true,
      },
    });

    return successResponse(
      res,
      {
        id: newPrompt.id,
        topic: newPrompt.title,
        description: newPrompt.description,
        genre: newPrompt.genre,
        targetLevel: newPrompt.targetLevel,
        wordTarget: newPrompt.wordTarget || 150,
        exampleStarters: newPrompt.exampleStarters || [],
        writingTips: newPrompt.writingTips || [],
        createdAt: newPrompt.createdAt,
      },
      MESSAGES.TOPIC_GENERATED_SUCCESSFULLY
    );
  } catch (error) {
    console.error("Error in createNewTopic:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};

export const rewriteSubmission = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id } = req.params;
    const { genre, body } = req.body;

    if (!body?.trim()) {
      return errorResponse(
        res,
        MESSAGES.BODY_REQUIRED,
        STATUS.BAD_REQUEST
      );
    }

    const existing = await prisma.submission.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        mistakes: {
          select: {
            pillar: true,
            subtype: true,
            severity: true,
            surfaceText: true,
            message: true,
            suggestion: true,
            canonicalRuleId: true,
          },
        },
      },
    });

    if (!existing) {
      return errorResponse(
        res,
        MESSAGES.SUBMISSION_NOT_FOUND,
        STATUS.NOT_FOUND
      );
    }

    const wordCount = body.trim().split(/\s+/).length;

    const previousScore =
      existing.analysisJson &&
      typeof existing.analysisJson === "object" &&
      "score" in existing.analysisJson
        ? existing.analysisJson.score
        : null;

    const previousMistakes = existing.mistakes.map((m) => ({
      pillar: m.pillar,
      subtype: m.subtype,
      severity: m.severity,
      surfaceText: m.surfaceText,
      message: m.message,
      suggestion: m.suggestion,
      canonicalRuleId: m.canonicalRuleId,
    }));

    await prisma.$transaction([
      prisma.submission.update({
        where: { id },
        data: {
          body: body.trim(),
          wordCount,
          genre: genre || existing.genre,
          status: "PENDING",
          analysisJson: null,
          rawAIResponse: null,
          errorMessage: null,
          completedAt: null,
        },
      }),
      prisma.mistake.deleteMany({
        where: {
          submissionId: id,
        },
      }),
    ]);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        profile: true,
      },
    });

    const { addSubmissionJob } = await import("../config/queue.js");

    await addSubmissionJob(
      {
        submissionId: id,
        userId,
        content: body.trim(),
        genre: genre || existing.genre,
        userProfile: user?.profile || null,
        isRewrite: true,
        previousMistakes,
        previousScore,
      },
      {
        jobId: `rewrite-${id}-${Date.now()}`,
      }
    );

    return successResponse(
      res,
      {
        submissionId: id,
        status: "PENDING",
      },
      MESSAGES.REWRITE_SUBMITTED_FOR_ANALYSIS
    );
  } catch (error) {
    console.error("Error submitting rewrite:", error);

    return errorResponse(
      res,
      MESSAGES.INTERNAL_ERROR,
      STATUS.INTERNAL_SERVER_ERROR
    );
  }
};
