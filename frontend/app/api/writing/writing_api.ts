import axiosInstance from "../axiosInstances";

export const createSubmission = async (data: {
  promptId?: string;
  title?: string;
  genre: string;
  body: string;
  targetWordCount?: number;
  metadata?: any;
}) => {
  try {
    const response = await axiosInstance.post('/writing/submissions', data);
    return response.data;
  } catch (error) {
    console.error("Error creating submission:", error);
    throw error;
  }
};

export const getSubmissionStatus = async (submissionId: string) => {
  try {
    const response = await axiosInstance.get(`/writing/submissions/${submissionId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting submission status:", error);
    throw error;
  }
};

export const getSubmissions = async (limit = 10, offset = 0) => {
  try {
    const response = await axiosInstance.get('/writing/submissions', {
      params: { limit, offset },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting submissions:", error);
    throw error;
  }
};

export const getMistakes = async (params?: {
  pillar?: string;
  subtype?: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
}) => {
  try {
    const response = await axiosInstance.get('/writing/me/mistakes', { params });
    return response.data;
  } catch (error) {
    console.error("Error getting mistakes:", error);
    throw error;
  }
};

export const getAnalyticsSummary = async (window = "30d") => {
  try {
    const response = await axiosInstance.get('/writing/me/analytics/summary', {
      params: { window },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting analytics summary:", error);
    throw error;
  }
};

export const getUserStats = async () => {
  try {
    const response = await axiosInstance.get('/writing/me/stats');
    return response.data;
  } catch (error) {
    console.error("Error getting user stats:", error);
    throw error;
  }
};

export const getWritingPrompts = async (genre?: string, limit = 10) => {
  try {
    const response = await axiosInstance.get('/writing/prompts', {
      params: { genre, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting writing prompts:", error);
    throw error;
  }
};

export const getTopic = async () => {
  try {
    const response = await axiosInstance.get('/writing/get-topics');
    return response.data;
  } catch (error) {
    console.error("Error getting topic:", error);
    throw error;
  }
};
