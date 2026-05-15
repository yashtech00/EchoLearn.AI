import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * =========================
 * CONFIG
 * =========================
 */

const PRIMARY_MODEL = "gemini-2.5-flash";
const FALLBACK_MODEL = "gemini-1.5-flash";

const GENERATION_CONFIG = {
  responseMimeType: "application/json",
};

const PILLARS = [
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
];

const PILLAR_LIST = PILLARS.join(" | ");

/**
 * =========================
 * HELPERS
 * =========================
 */

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const createModel = (modelName = PRIMARY_MODEL) => {
  return genAI.getGenerativeModel({
    model: modelName,
    generationConfig: GENERATION_CONFIG,
  });
};

const safeJsonParse = (text, fallback) => {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("JSON Parse Error:", error.message);

    return fallback;
  }
};

const buildProfileContext = (profile) => {
  if (!profile) return "No user profile provided.";

  return `
Role: ${profile.primaryRole || "Unknown"}
Reading Level: ${profile.englishReadingSelfScore || 0}/5
Writing Level: ${profile.englishWritingSelfScore || 0}/5
Goal: ${profile.primaryGoal || "Unknown"}
Interests: ${
    profile.interestTags?.length
      ? profile.interestTags.join(", ")
      : "None"
  }
Genres: ${
    profile.preferredGenres?.length
      ? profile.preferredGenres.join(", ")
      : "None"
  }
`;
};

/**
 * Retry Wrapper
 */
const generateWithRetry = async ({
  prompt,
  maxAttempts = 3,
  retryDelay = 10000,
}) => {
  let lastError;

  const models = [PRIMARY_MODEL, FALLBACK_MODEL];

  for (const modelName of models) {
    const model = createModel(modelName);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        console.log(
          `[Gemini] Model=${modelName} Attempt=${attempt}/${maxAttempts}`
        );

        const result = await model.generateContent(prompt);

        return result.response.text();
      } catch (error) {
        lastError = error;

        console.error(
          `[Gemini Error] Model=${modelName} Attempt=${attempt}`,
          error.message
        );

        const shouldRetry =
          error?.status === 500 ||
          error?.status === 503 ||
          error?.message?.includes("high demand");

        if (!shouldRetry) {
          throw error;
        }

        if (attempt < maxAttempts) {
          console.log(
            `Retrying in ${retryDelay / 1000} seconds...`
          );

          await sleep(retryDelay);
        }
      }
    }
  }

  throw lastError;
};

/**
 * =========================
 * ANALYZE WRITING
 * =========================
 */

export const analyzeMistakeMemory = async (
  content,
  profile
) => {
  const fallback = {
    summary: {
      mistakeCount: 0,
      errorDensityPer100Words: 0,
      byPillar: [],
    },
    mistakes: [],
    feedback:
      "Your writing looks good. Keep practicing consistently.",
    score: 85,
  };

  try {
    const prompt = `
You are an expert English writing evaluator.

Allowed Pillars:
${PILLAR_LIST}

User Context:
${buildProfileContext(profile)}

Analyze this writing:
"""
${content}
"""

Return ONLY valid JSON:

{
  "summary": {
    "mistakeCount": number,
    "errorDensityPer100Words": number,
    "byPillar": [
      {
        "pillar": string,
        "count": number
      }
    ]
  },
  "mistakes": [
    {
      "pillar": string,
      "subtype": string,
      "severity": "LOW" | "MEDIUM" | "HIGH",
      "startOffset": number,
      "endOffset": number,
      "surfaceText": string,
      "message": string,
      "suggestion": string,
      "canonicalRuleId": string,
      "confidence": number
    }
  ],
  "feedback": string,
  "score": number
}

Rules:
- Use ONLY allowed pillars
- Calculate offsets carefully
- Give actionable suggestions
- Return pure JSON only
`;

    const text = await generateWithRetry({ prompt });

    const analysisData = safeJsonParse(text, fallback);

    return {
      success: true,
      data: analysisData,
    };
  } catch (error) {
    console.error("Analyze Mistake Memory Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/**
 * =========================
 * GENERATE TOPIC
 * =========================
 */

export const generateTopic = async (userProfile) => {
  const fallback = {
    topic:
      "Describe how technology improves your travel experiences.",
    genre: "SHORT_ESSAY",
    wordTarget: 150,
  };

  try {
    const prompt = `
You are an English writing coach.

User Context:
${buildProfileContext(userProfile)}

Generate ONE personalized writing topic.

Requirements:
- 10-20 words
- Practical and engaging
- Match user's English level
- Relevant to user interests/goals

Allowed Genres:
GENERAL | WORK_EMAIL | SHORT_ESSAY | DIARY | ACADEMIC_PARAGRAPH

Return ONLY valid JSON:

{
  "topic": string,
  "genre": string,
  "wordTarget": number
}
`;

    const text = await generateWithRetry({ prompt });

    const topicData = safeJsonParse(text, fallback);

    return {
      success: true,
      data: topicData,
    };
  } catch (error) {
    console.error("Generate Topic Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};