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

/**
 * Create Gemini Model
 */
const createModel = ({
  modelName = PRIMARY_MODEL,
  temperature = 0.3,
}) => {
  return genAI.getGenerativeModel({
    model: modelName,

    generationConfig: {
      responseMimeType: "application/json",
      temperature,
    },
  });
};

/**
 * Safe JSON Parse
 */
const safeJsonParse = (text, fallback) => {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("JSON Parse Error:", error.message);

    return fallback;
  }
};

/**
 * Build User Context
 */
const buildProfileContext = (profile) => {
  if (!profile) return "No user profile provided.";

  return `
Role: ${profile.primaryRole || "Unknown"}
Reading Level: ${profile.englishReadingSelfScore || 0}/5
Writing Level: ${profile.englishWritingSelfScore || 0}/5
Goal: ${profile.primaryGoal || "Unknown"}

Interests:
${
  profile.interestTags?.length
    ? profile.interestTags.join(", ")
    : "None"
}

Preferred Genres:
${
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
  temperature = 0.3,
  maxAttempts = 3,
  retryDelay = 10000,
}) => {
  let lastError;

  const models = [PRIMARY_MODEL, FALLBACK_MODEL];

  for (const modelName of models) {
    const model = createModel({
      modelName,
      temperature,
    });

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
  profile,
  options = {}
) => {
  const {
    isRewrite = false,
    previousMistakes = [],
    previousScore = null,
  } = options;
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
    const rewriteContext =
      isRewrite && previousMistakes.length > 0
        ? `
This is a REWRITE of a previous submission (previous score: ${previousScore ?? "unknown"}/100).
The learner tried to fix these issues from the last draft:
${previousMistakes
  .slice(0, 25)
  .map(
    (m, i) =>
      `${i + 1}. [${m.pillar}] "${m.surfaceText || ""}" — ${m.message}${m.suggestion ? ` → Suggestion: ${m.suggestion}` : ""}`
  )
  .join("\n")}

In your feedback, acknowledge improvements when prior mistakes were fixed.
Score the rewrite holistically; reward clear progress but still flag remaining or new issues.
`
        : isRewrite
          ? `
This is a REWRITE of a previous submission (previous score: ${previousScore ?? "unknown"}/100).
Compare against typical expectations for improvement and note progress in feedback.
`
          : "";

    const prompt = `
You are an expert English writing evaluator.

Allowed Pillars:
${PILLAR_LIST}

User Context:
${buildProfileContext(profile)}
${rewriteContext}

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

      "severity":
        "LOW" |
        "MEDIUM" |
        "HIGH",

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
- Avoid duplicate mistakes
- Be strict but fair
- Return pure JSON only
`;

    const text = await generateWithRetry({
      prompt,

      // LOW temperature for consistency
      temperature: 0.1,
    });

    const analysisData = safeJsonParse(text, fallback);

    return {
      success: true,
      data: analysisData,
    };
  } catch (error) {
    console.error(
      "Analyze Mistake Memory Error:",
      error
    );

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
    topic: "Describe how technology improves your travel experiences.",
    description: "Write a short essay outlining the impact of technology on travel, providing specific examples.",
    genre: "SHORT_ESSAY",
    targetLevel: "B2 Upper Intermediate",
    wordTarget: 150,
    writingTips: [
      {
        title: "Use Specific Examples",
        description: "Instead of talking generally, name specific apps or technologies you use when traveling."
      },
      {
        title: "Link Paragraphs",
        description: "Use transition words like 'Furthermore' or 'In addition' to connect your thoughts cleanly."
      }
    ]
  };

  try {
    const prompt = `
You are a creative English writing coach.

User Context:
${buildProfileContext(userProfile)}

Generate ONE personalized writing topic.

Requirements:
- Topic should be 10-20 words
- Practical and engaging
- Match user's English level
- Relevant to user interests/goals
- Creative and non-repetitive
- Encourage opinion/thought expression
- Provide a clear, actionable description (guidelines for the user)
- Provide exactly 2 highly relevant and helpful writing tips tailored to this topic

Allowed Genres:
GENERAL |
WORK_EMAIL |
SHORT_ESSAY |
DIARY |
ACADEMIC_PARAGRAPH

Return ONLY valid JSON:

{
  "topic": string,
  "description": string,
  "genre": string,
  "targetLevel": string,
  "wordTarget": number,
  "writingTips": [
    {
      "title": string,
      "description": string
    },
    {
      "title": string,
      "description": string
    }
  ]
}
`;

    const text = await generateWithRetry({
      prompt,

      // HIGH temperature for creativity
      temperature: 0.9,
    });

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