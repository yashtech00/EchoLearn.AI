import { z } from "zod";

export const user_profile_validator = z.object({
  primaryRole: z.enum(["STUDENT", "WORKING_PROFESSIONAL", "HOBBYIST","JOB_SEEKER"]),

  englishReadingSelfScore: z.number().min(1).max(5),
  englishWritingSelfScore: z.number().min(1).max(5),

  primaryGoal: z.enum(["FLUENCY", "PROFICIENCY", "EXAM_PREP", "BUSINESS_ENGLISH", "TRAVEL_AND_CULTURE_ENGLISH", "GRAMMAR_MASTERY"]).optional(),
  weeklyTimeMinutes: z.number().optional(),

  interestTags: z.array(z.string()).optional(),
  preferredGenres: z.array(z.string()).optional(),

  localePreference: z.string().default("en-US"),

  // AI scores (optional)
  grammarScore: z.number().min(0).max(100).optional(),
  vocabularyScore: z.number().min(0).max(100).optional(),
  fluencyScore: z.number().min(0).max(100).optional(),
  pronunciationScore: z.number().min(0).max(100).optional(),

  targetScoreGoal: z.number().nullable().optional(),

  dailyGoalMinutes: z.number().optional(),
  preferredLearningStyle: z.string().optional(),

  weakAreas: z.array(z.string()).optional(),

  // ❌ remove from frontend ideally
  initialAssessmentDone: z.boolean().optional(),
});

export const user_profile_update_validator = user_profile_validator.partial();

export const profile_me_update_validator = z
  .object({
    name: z.string().min(1).max(100).optional(),
    displayName: z.string().max(100).nullable().optional(),
  })
  .merge(user_profile_update_validator);
