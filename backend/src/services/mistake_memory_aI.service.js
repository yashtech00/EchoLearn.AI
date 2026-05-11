import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { log } from "node:console";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeMistakeMemory = async (content, profile) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // Build context from user profile if available
    let profileContext = "";
    if (profile) {
      profileContext = `
User Profile Context:
- Role: ${profile.primaryRole}
- English Self-Assessment (Reading): ${profile.englishReadingSelfScore}/5
- English Self-Assessment (Writing): ${profile.englishWritingSelfScore}/5
- Primary Goal: ${profile.primaryGoal}
- Interests: ${profile.interestTags?.join(", ") || "Not specified"}
- Preferred Genres: ${profile.preferredGenres?.join(", ") || "Not specified"}
`;
    }

    const prompt = `You are an expert English writing coach specializing in the 12-pillar framework for writing analysis.

${profileContext}

Analyze the following writing and provide feedback in the 12-pillar framework:
${content}

Return a JSON response with this exact structure:
{
  "summary": {
    "mistakeCount": number,
    "errorDensityPer100Words": number,
    "byPillar": [
      {
        "pillar": "VERB_SYSTEMS" | "AGREEMENT_GRAMMAR" | "DETERMINERS_QUANTITY" | "PREPOSITIONS_PHRASAL" | "LEXICAL_COLLOCATION" | "CLARITY_AMBIGUITY" | "COHESION_FLOW" | "INFO_STRUCTURE" | "REGISTER_TONE" | "PUNCTUATION_MECHANICS" | "SPELLING_ORTHOGRAPHY" | "GENRE_PRAGMATICS",
        "count": number
      }
    ]
  },
  "mistakes": [
    {
      "pillar": "VERB_SYSTEMS" | "AGREEMENT_GRAMMAR" | "DETERMINERS_QUANTITY" | "PREPOSITIONS_PHRASAL" | "LEXICAL_COLLOCATION" | "CLARITY_AMBIGUITY" | "COHESION_FLOW" | "INFO_STRUCTURE" | "REGISTER_TONE" | "PUNCTUATION_MECHANICS" | "SPELLING_ORTHOGRAPHY" | "GENRE_PRAGMATICS",
      "subtype": string (e.g., "TENSE_CONSISTENCY", "COMMA_SPLICE"),
      "severity": "LOW" | "MEDIUM" | "HIGH",
      "startOffset": number (character index in the original text),
      "endOffset": number (character index in the original text),
      "surfaceText": string (the exact text span that contains the mistake),
      "message": string (clear explanation of the mistake),
      "suggestion": string (corrected version or suggestion),
      "canonicalRuleId": string (optional, e.g., "RULE.SVA_PLURAL_SUBJECT_WERE"),
      "confidence": number (0-1)
    }
  ],
  "feedback": string (overall constructive feedback),
  "score": number (0-100 overall writing score)
}

Important:
- Calculate character offsets accurately based on the original text
- Provide specific, actionable feedback
- Use appropriate severity levels
- Include at least 3-5 mistakes if any exist
- If the writing is excellent, still provide at least 1-2 minor suggestions
- Calculate score based on mistake count, severity, and overall quality`;

console.log("analyzesd mistake memory Prompt", prompt);


    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response
    let analysisData;
    try {
      analysisData = JSON.parse(text);
      console.log("analyzed data",analysisData);
      
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      // Return a fallback response
      analysisData = {
        summary: {
          mistakeCount: 0,
          errorDensityPer100Words: 0,
          byPillar: [],
        },
        mistakes: [],
        feedback: "Your writing looks good! Keep practicing to improve further.",
        score: 85,
      };
    }

    return {
      success: true,
      data: analysisData,
    };
  } catch (error) {
    console.error("Gemini Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export const generateTopic = async (userProfile) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // Build context from user profile if available
    let profileContext = "";
    if (userProfile) {
      profileContext = `
User Profile Context:
- Role: ${userProfile.primaryRole}
- English Self-Assessment (Reading): ${userProfile.englishReadingSelfScore}/5
- English Self-Assessment (Writing): ${userProfile.englishWritingSelfScore}/5
- Primary Goal: ${userProfile.primaryGoal}
- Interests: ${userProfile.interestTags?.join(", ") || "Not specified"}
- Preferred Genres: ${userProfile.preferredGenres?.join(", ") || "Not specified"}
`;
    }

    const prompt = `You are an expert English writing coach. Generate a personalized writing topic for the user based on their profile.

${profileContext}

Generate a writing topic with these requirements:
- The topic should be 2-3 lines
- 10-20 words total
- Should be relevant to the user's interests, goals, and preferred genres
- Should be appropriate for their English level (writing self-score)
- Should be engaging and practical

Return a JSON response with this exact structure:
{
  "topic": string (the generated writing topic),
  "genre": "GENERAL" | "WORK_EMAIL" | "SHORT_ESSAY" | "DIARY" | "ACADEMIC_PARAGRAPH",
  "wordTarget": number (suggested word count: 100-200)
}`;

    console.log("prompt", prompt);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Parse the JSON response
    let topicData;
    try {
      topicData = JSON.parse(text);
      console.log("topic Data", topicData);
      
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      // Return a fallback response
      topicData = {
        topic: "Write about your favorite hobby and why you enjoy it.",
        genre: "GENERAL",
        wordTarget: 150,
      };
    }

    return {
      success: true,
      data: topicData,
    };
  } catch (error) {
    console.error("Gemini Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};