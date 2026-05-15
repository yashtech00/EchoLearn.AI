import { z } from "zod";

// Request schema for creating a submission
export const createSubmissionValidator = z.object({
  promptId: z.string().optional(),
  title: z.string().optional(),
  genre: z.enum(["GENERAL", "WORK_EMAIL", "SHORT_ESSAY", "DIARY", "ACADEMIC_PARAGRAPH"]),
  body: z.string().min(10).max(5000),
  targetWordCount: z.number().optional(),
  metadata: z.object({
    clientTimeZone: z.string().optional(),
  }).optional(),
});

// AI Response schema for 12-pillar analysis
export const analysisResponseValidator = z.object({
  summary: z.object({
    mistakeCount: z.number(),
    errorDensityPer100Words: z.number(),
    byPillar: z.array(z.object({
      pillar: z.enum([
        "VERB_SYSTEMS",
        "AGREEMENT_GRAMMAR",
        "DETERMINERS_QUANTITY",
        "PREPOSITIONS_PHRASAL",
        "LEXICAL_COLLOCATION",
        "CLARITY_AMBIGUITY",
        "COHESION_FLOW",
        "INFO_STRUCTURE",
        "REGISTER_TONE",
        "PUNCTUATION_MECHANICS",
        "SPELLING_ORTHOGRAPHY",
        "GENRE_PRAGMATICS",
      ]),
      count: z.number(),
    })),
  }),
  mistakes: z.array(z.object({
    pillar: z.enum([
      "VERB_SYSTEMS",
      "AGREEMENT_GRAMMAR",
      "DETERMINERS_QUANTITY",
      "PREPOSITIONS_PHRASAL",
      "LEXICAL_COLLOCATION",
      "CLARITY_AMBIGUITY",
      "COHESION_FLOW",
      "INFO_STRUCTURE",
      "REGISTER_TONE",
      "PUNCTUATION_MECHANICS",
      "SPELLING_ORTHOGRAPHY",
      "GENRE_PRAGMATICS",
    ]),
    subtype: z.string(),
    severity: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
    startOffset: z.number(),
    endOffset: z.number(),
    surfaceText: z.string().optional(),
    message: z.string(),
    suggestion: z.string().optional(),
    canonicalRuleId: z.string().optional(),
    confidence: z.number().optional(),
  })),
  feedback: z.string().optional(),
  score: z.number().optional(),
});

// XP event types
export const xpEventTypes = [
  "SUBMISSION_ANALYZED",
  "FIRST_SUBMISSION_OF_DAY",
  "STREAK_BONUS",
  "MISTAKE_CORRECTED",
  "LEVEL_UP",
];

export const xpEventTypeValidator = z.enum(xpEventTypes);
