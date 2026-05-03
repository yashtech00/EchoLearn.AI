import { z } from "zod";

export const user_profile_validator = z.object({
  primaryRole: z.enum(["STUDENT", "WORKING_PROFESSIONAL", "OTHER"]),

  educationLevel: z
    .enum(["HIGH_SCHOOL", "UNDERGRAD", "GRADUATE", "OTHER"])
    .optional(),

  intitutionContext: z
    .enum(["SCHOOL", "COLLEGE", "WORKPLACE", "SELF_STUDY"])
    .optional(),

  occupationTitle: z.string().optional(),

  englishReadingSelfScore: z.number().min(1).max(5),
  englishWritingSelfScore: z.number().min(1).max(5),

  primaryGoal: z.string().optional(),
  weeklyTimeMinutes: z.number().optional(),

  interestTags: z.array(z.string()).optional(),
  preferredGenres: z.array(z.string()).optional(),

  localePreference: z.string().default("en-US"),

  // AI scores (optional)
  grammarScore: z.number().min(0).max(100).optional(),
  vocabularyScore: z.number().min(0).max(100).optional(),
  fluencyScore: z.number().min(0).max(100).optional(),
  pronunciationScore: z.number().min(0).max(100).optional(),

  learningPurpose: z.string().optional(),
  targetScoreGoal: z.number().optional(),

  dailyGoalMinutes: z.number().optional(),
  preferredLearningStyle: z.string().optional(),

  weakAreas: z.array(z.string()).optional(),

  // ❌ remove from frontend ideally
  initialAssessmentDone: z.boolean().optional(),
});
