export interface UserProfile {
  id?: string;
  primaryRole: string;
  englishReadingSelfScore: number;
  englishWritingSelfScore: number;
  primaryGoal?: string;
  weeklyTimeMinutes?: number;
  interestTags?: string[];
  preferredGenres?: string[];
  localePreference?: string;
  targetScoreGoal?: number | null;
  dailyGoalMinutes?: number;
  preferredLearningStyle?: string;
  weakAreas?: string[];
  grammarScore?: number;
  vocabularyScore?: number;
  fluencyScore?: number;
  pronunciationScore?: number;
}

export interface ProfileMeUser {
  id: string;
  name: string;
  email: string;
  displayName?: string | null;
  image?: string | null;
  isNewUser?: boolean;
  createdAt: string;
}

export interface ProfileStats {
  totalXp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate?: string | null;
  xpInLevel?: number;
  xpToNextLevel?: number;
  levelProgressPercent?: number;
  xpPerLevel?: number;
}

export interface ProfileProgress {
  submissionsCount: number;
  completedSubmissions: number;
  mistakesCount: number;
}
