import prisma from '../lib/prisma.js';

export const XP_STREAK_BONUS_DAY_2 = 5;
export const XP_STREAK_BONUS_CAP = 15;

const calculateLevel = (totalXp) => {
  return Math.floor(totalXp / 50) + 1;
};

/**
 * Global Activity Service
 * 
 * Tracks any completed learning activity and updates the global UserStats 
 * (XP, Level, Streak) accordingly.
 */
export const logUserActivity = async (userId, activityType, source, sourceId, xpEarned) => {
  // 1. Log the unified UserActivity event
  await prisma.userActivity.create({
    data: {
      userId,
      activityType,
      source,
      sourceId,
      xpEarned,
    },
  });

  // 2. Fetch or create UserStats
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

  // 3. Update Global Streak
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

  // 4. Update XP & Level
  const finalXpEarned = xpEarned + streakBonus;
  const newTotalXp = userStats.totalXp + finalXpEarned;
  const newLevel = calculateLevel(newTotalXp);

  // 5. Check Level Up
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

  // 6. Update UserStats in DB
  await prisma.userStats.update({
    where: { userId },
    data: {
      currentStreak,
      longestStreak,
      lastActiveDate: today,
      totalXp: newTotalXp,
      level: newLevel,
    },
  });

  return {
    xpEarned: finalXpEarned,
    streakBonus,
    currentStreak,
    newLevel,
    levelUp: newLevel > userStats.level
  };
};
