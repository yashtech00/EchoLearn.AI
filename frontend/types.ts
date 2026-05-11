export interface UserProfile {
    id?: string;
    primaryRole: string;
   
    englishReadingSelfScore: number;
    englishWritingSelfScore: number;
    primaryGoal: string;
    weeklyTimeMinutes: number;
    interestTags: string[];
    preferredGenres: string[];
  
    targetScoreGoal: number | null;
    dailyGoalMinutes: number;
    preferredLearningStyle: string;
    weakAreas: string[];
}