import prisma from "../lib/prisma.js";
import {
  user_profile_validator,
  profile_me_update_validator,
} from "../validator/user_profile_validator.js";

const XP_PER_LEVEL = 50;

const buildLevelProgress = (totalXp = 0, level = 1) => {
  const xpInLevel = totalXp % XP_PER_LEVEL;
  const xpToNextLevel = XP_PER_LEVEL - xpInLevel;
  const levelProgressPercent = Math.round((xpInLevel / XP_PER_LEVEL) * 100);

  return {
    totalXp,
    level,
    xpInLevel,
    xpToNextLevel,
    levelProgressPercent,
    xpPerLevel: XP_PER_LEVEL,
  };
};

const defaultStats = () => ({
  totalXp: 0,
  level: 1,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  ...buildLevelProgress(0, 1),
});

async function getProgressCounts(userId) {
  const [submissionsCount, completedSubmissions, mistakesCount] =
    await Promise.all([
      prisma.submission.count({ where: { userId } }),
      prisma.submission.count({
        where: { userId, status: "COMPLETED" },
      }),
      prisma.mistake.count({
        where: { submission: { userId } },
      }),
    ]);

  return { submissionsCount, completedSubmissions, mistakesCount };
}

export const createUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingProfile = await prisma.userProfile.findUnique({
      where: { userId },
    });

    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const parsed = user_profile_validator.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ errors: parsed.error.flatten().fieldErrors });
    }

    const data = parsed.data;

    const [userProfile] = await prisma.$transaction([
      prisma.userProfile.create({
        data: {
          ...data,
          userId,
          onboardingCompletedAt: new Date(),
          initialAssessmentDone: false,
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: { isNewUser: false },
      }),
    ]);

    return res.status(201).json({
      message: "User profile created successfully",
      userProfile,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    const userProfile = await prisma.userProfile.findUnique({
      where: { userId },
    });

    if (!userProfile) {
      return res.status(404).json({
        message: "User profile not found",
        isNewUser: true,
      });
    }

    return res.status(200).json({
      message: "User profile fetched successfully",
      userProfile,
      isNewUser: false,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProfileMe = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        displayName: true,
        image: true,
        isNewUser: true,
        createdAt: true,
        profile: true,
        stats: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let stats = user.stats;
    if (!stats) {
      stats = await prisma.userStats.create({
        data: {
          userId,
          totalXp: 0,
          level: 1,
          currentStreak: 0,
          longestStreak: 0,
        },
      });
    }

    const progress = await getProgressCounts(userId);

    const [recentActivities, recentSubmissions] = await Promise.all([
      prisma.userActivity.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 8,
      }),
      prisma.submission.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
          id: true,
          title: true,
          genre: true,
          body: true,
          wordCount: true,
          status: true,
          createdAt: true,
          analysisJson: true,
        },
      }),
    ]);

    const levelProgress = buildLevelProgress(stats.totalXp, stats.level);

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        displayName: user.displayName,
        image: user.image,
        isNewUser: user.isNewUser,
        createdAt: user.createdAt,
      },
      profile: user.profile,
      stats: {
        totalXp: stats.totalXp,
        level: stats.level,
        currentStreak: stats.currentStreak,
        longestStreak: stats.longestStreak,
        lastActiveDate: stats.lastActiveDate,
        ...levelProgress,
      },
      progress,
      recentActivities,
      recentSubmissions: recentSubmissions.map((sub) => ({
        ...sub,
        score:
          sub.analysisJson &&
          typeof sub.analysisJson === "object" &&
          "score" in sub.analysisJson
            ? sub.analysisJson.score
            : null,
      })),
    });
  } catch (error) {
    console.error("Error fetching profile me:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;

    const parsed = profile_me_update_validator.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ errors: parsed.error.flatten().fieldErrors });
    }

    const { name, displayName, ...profileFields } = parsed.data;

    const existingProfile = await prisma.userProfile.findUnique({
      where: { userId },
    });

    if (!existingProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const hasUserFields = name !== undefined || displayName !== undefined;
    const hasProfileFields = Object.keys(profileFields).length > 0;

    if (!hasUserFields && !hasProfileFields) {
      return res.status(400).json({ message: "No fields to update" });
    }

    const operations = [];

    if (hasUserFields) {
      operations.push(
        prisma.user.update({
          where: { id: userId },
          data: {
            ...(name !== undefined ? { name } : {}),
            ...(displayName !== undefined ? { displayName } : {}),
          },
        }),
      );
    }

    if (hasProfileFields) {
      operations.push(
        prisma.userProfile.update({
          where: { userId },
          data: {
            ...profileFields,
            updatedAt: new Date(),
          },
        }),
      );
    }

    await prisma.$transaction(operations);

    const updated = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        displayName: true,
        image: true,
        profile: true,
      },
    });

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updated.id,
        name: updated.name,
        email: updated.email,
        displayName: updated.displayName,
        image: updated.image,
      },
      userProfile: updated.profile,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Profile not found" });
    }

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

    const progress = await getProgressCounts(userId);

    const [recentActivities, recentXpEvents] = await Promise.all([
      prisma.userActivity.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 8,
      }),
      prisma.xpEvent.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
    ]);

    const levelProgress = buildLevelProgress(
      userStats.totalXp,
      userStats.level,
    );

    return res.status(200).json({
      message: "User stats fetched successfully",
      stats: {
        totalXp: userStats.totalXp,
        level: userStats.level,
        currentStreak: userStats.currentStreak,
        longestStreak: userStats.longestStreak,
        lastActiveDate: userStats.lastActiveDate,
        currentStreakDays: userStats.currentStreak,
        longestStreakDays: userStats.longestStreak,
        ...levelProgress,
      },
      progress,
      recentActivities,
      recentXpEvents,
    });
  } catch (error) {
    console.error("Error fetching user stats:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
