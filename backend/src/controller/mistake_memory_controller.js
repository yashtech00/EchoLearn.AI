import prisma from "../lib/prisma.js";
import { analyzeMistakeMemory, generateTopic } from "../services/mistake_memory_aI.service.js";

// XP calculation constants (from plan.md)
const XP_BASE_SUBMISSION = 10;
const XP_PER_50_WORDS = 1;
const XP_WORD_CAP = 20; // Max XP from word count
const XP_STREAK_BONUS_DAY_2 = 5;
const XP_STREAK_BONUS_CAP = 15;

// Calculate level from total XP (from plan.md)
const calculateLevel = (totalXp) => {
  return Math.floor(Math.sqrt(totalXp / 50)) + 1;
};

// Update streak and return streak bonus
const updateStreak = async (userId, userStats) => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  
  const lastActiveDate = userStats.lastActiveDate ? new Date(userStats.lastActiveDate) : null;
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setUTCHours(0, 0, 0, 0);

  let currentStreak = userStats.currentStreak || 0;
  let longestStreak = userStats.longestStreak || 0;
  let streakBonus = 0;

  if (lastActiveDate) {
    lastActiveDate.setUTCHours(0, 0, 0, 0);
    
    if (lastActiveDate.getTime() === today.getTime()) {
      // Same day - no streak update
      streakBonus = currentStreak >= 2 ? Math.min(XP_STREAK_BONUS_CAP, (currentStreak - 1) * XP_STREAK_BONUS_DAY_2) : 0;
    } else if (lastActiveDate.getTime() === yesterday.getTime()) {
      // Consecutive day - increment streak
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
      streakBonus = currentStreak >= 2 ? Math.min(XP_STREAK_BONUS_CAP, (currentStreak - 1) * XP_STREAK_BONUS_DAY_2) : 0;
    } else {
      // Streak broken - reset to 1
      currentStreak = 1;
    }
  } else {
    // First activity
    currentStreak = 1;
  }

  // Update user stats
  await prisma.userStats.update({
    where: { userId },
    data: {
      currentStreak,
      longestStreak,
      lastActiveDate: today,
    },
  });

  return streakBonus;
};

// Create XP event and update user stats
const awardXP = async (userId, xpDelta, eventType, payload = {}) => {
  // Create XP event
  await prisma.xpEvent.create({
    data: {
      userId,
      eventType,
      xpDelta,
      payload,
    },
  });

  // Update user stats
  const userStats = await prisma.userStats.findUnique({
    where: { userId },
  });

  if (!userStats) {
    // Create user stats if doesn't exist
    await prisma.userStats.create({
      data: {
        userId,
        totalXp: xpDelta,
        level: calculateLevel(xpDelta),
      },
    });
  } else {
    const newTotalXp = userStats.totalXp + xpDelta;
    const newLevel = calculateLevel(newTotalXp);
    
    await prisma.userStats.update({
      where: { userId },
      data: {
        totalXp: newTotalXp,
        level: newLevel,
      },
    });

    // Check for level up
    if (newLevel > userStats.level) {
      await prisma.xpEvent.create({
        data: {
          userId,
          eventType: "LEVEL_UP",
          xpDelta: 0,
          payload: {
            oldLevel: userStats.level,
            newLevel,
          },
        },
      });
    }
  }
};

export const createSubmission = async (req, res) => {
  try {
    const { userId } = req.user;
    const { promptId, title, genre, body, targetWordCount, metadata } = req.body;

    if (!body) {
      return res.status(400).json({ message: "Body is required" });
    }

    // Calculate word count
    const wordCount = body.trim().split(/\s+/).length;

    // Create submission with PENDING status
    const submission = await prisma.submission.create({
      data: {
        userId,
        promptId: promptId || null,
        title: title || null,
        genre,
        body,
        wordCount,
        status: "PENDING",
      },
    });

    // Get user profile for AI context
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    // Add job to BullMQ queue for async processing
    const { addSubmissionJob } = await import("../config/queue.js");
    await addSubmissionJob({
      submissionId: submission.id,
      userId,
      content: body,
      genre,
      userProfile: user?.profile || null,
    });

    // Return immediately with submission ID and status
    return res.status(201).json({
      message: "Submission created successfully",
      submissionId: submission.id,
      status: "PENDING",
    });
  } catch (error) {
    console.error("Error creating submission:", error);
    return res.status(500).json({ message: "Internal server error" });
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
      return res.status(404).json({ message: "Submission not found" });
    }

    return res.status(200).json({
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
    });
  } catch (error) {
    console.error("Error getting submission status:", error);
    return res.status(500).json({ message: "Internal server error" });
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
          select: { mistakes: true }
        }
      },
      orderBy: {
        createdAt: "desc",
      },
      take: parseInt(limit),
      skip: parseInt(offset),
    });

    return res.status(200).json({
      message: "Submissions fetched successfully",
      submissions,
    });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMistakes = async (req, res) => {
  try {
    const { userId } = req.user;
    const { pillar, subtype, dateFrom, dateTo, limit = 50 } = req.query;

    const where = {
      submission: {
        userId
      }
    };
    
    if (pillar) where.pillar = pillar;
    if (subtype) where.subtype = subtype;
    
    if (dateFrom || dateTo) {
      where.createdAt = {};
      if (dateFrom) where.createdAt.gte = new Date(dateFrom);
      if (dateTo) where.createdAt.lte = new Date(dateTo);
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
      take: parseInt(limit),
    });

    return res.status(200).json({
      message: "Mistakes fetched successfully",
      mistakes,
    });
  } catch (error) {
    console.error("Error fetching mistakes:", error);
    return res.status(500).json({ message: "Internal server error" });
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

    return res.status(200).json({
      message: "Analytics summary fetched successfully",
      window,
      submissionsCount,
      totalMistakes,
      avgErrorDensityPer100Words: avgErrorDensity,
      pillarMix,
      topSubtypes,
    });
  } catch (error) {
    console.error("Error fetching analytics summary:", error);
    return res.status(500).json({ message: "Internal server error" });
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
          userId,
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

    return res.status(200).json({
      message: "User stats fetched successfully",
      stats: {
        totalXp: userStats.totalXp,
        level: userStats.level,
        currentStreakDays: userStats.currentStreak,
        longestStreakDays: userStats.longestStreak,
        lastActiveDate: userStats.lastActiveDate,
      },
      recentXpEvents,
    });
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getWritingPrompts = async (req, res) => {
  try {
    const { genre, limit = 10 } = req.query;

    const where = { isActive: true };
    if (genre) where.genre = genre;

    const prompts = await prisma.writingPrompt.findMany({
      where,
      take: parseInt(limit),
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      message: "Writing prompts fetched successfully",
      prompts,
    });
  } catch (error) {
    console.error("Error fetching writing prompts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTopics = async (req, res) => {
  try {
    const { userId } = req.user;

    // Get user with profile
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate topic using AI with user profile context
    const AIResponse = await generateTopic(user.profile);

    if (!AIResponse.success) {
      return res.status(500).json({ message: "Failed to generate topic", error: AIResponse.error });
    }

    const topicData = AIResponse.data;

    return res.status(200).json({
      message: "Topic generated successfully",
      topic: topicData.topic,
      genre: topicData.genre,
      wordTarget: topicData.wordTarget,
    });
  } catch (error) {
    console.error("Error generating topic:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const rewriteSubmission = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id } = req.params;
    const { genre, targetWordCount, body, metadata } = req.body;

    if (!body) {
      return res.status(400).json({ message: "Body is required" });
    }

    const previousSubmission = await prisma.submission.findFirst({
      where: { id, userId },
    });

    if (!previousSubmission) {
      return res.status(404).json({ message: "Original submission not found" });
    }

    const wordCount = body.trim().split(/\s+/).length;

    // Create submission with PENDING status
    const submission = await prisma.submission.create({
      data: {
        userId,
        promptId: previousSubmission.promptId || null,
        title: previousSubmission.title || null,
        genre: genre || previousSubmission.genre,
        body,
        wordCount,
        status: "PENDING",
      },
    });

    // Get user profile for AI context
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    // Add job to BullMQ queue for async processing
    const { addSubmissionJob } = await import("../config/queue.js");
    await addSubmissionJob({
      submissionId: submission.id,
      userId,
      content: body,
      genre,
      userProfile: user?.profile || null,
    });

    // Return immediately with submission ID and status
    return res.status(201).json({
      message: "Submission created successfully",
      submissionId: submission.id,
      status: "PENDING",
    });
  } catch (error) {
    console.error("Error creating submission:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};