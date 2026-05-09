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
export enum EducationLevel {
    HIGH_SCHOOL = "HIGH_SCHOOL",
    UNDERGRAD = "UNDERGRAD",
    GRADUATE = "GRADUATE",
    OTHER = "OTHER",
}
export enum InstitutionContext {
    SCHOOL = "SCHOOL",
    COLLEGE = "COLLEGE",
    WORKPLACE = "WORKPLACE",
    SELF_STUDY = "SELF_STUDY",
}