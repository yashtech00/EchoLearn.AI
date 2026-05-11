import axiosInstance from "../axiosInstances";

export const createSubmission = async (data: {
  promptId?: string;
  title?: string;
  genre: string;
  body: string;
  targetWordCount?: number;
  metadata?: {
    clientTimeZone?: string;
  };
}) => {
  try {
    const response = await axiosInstance.post('/writing/submissions', data);
    return response.data;
  } catch (error) {
    console.error("Error creating submission:", error);
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
    console.error("Error fetching submissions:", error);
    throw error;
  }
};

export const getMistakes = async (params?: {
  pillar?: string;
  subtype?: string;
  dateFrom?: string;
  dateTo?: string;
  limit?: number;
}) => {
  try {
    const response = await axiosInstance.get('/writing/me/mistakes', { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching mistakes:", error);
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
    console.error("Error fetching analytics summary:", error);
    throw error;
  }
};

export const getUserStats = async () => {
  try {
    const response = await axiosInstance.get('/writing/me/stats');
    return response.data;
  } catch (error) {
    console.error("Error fetching user stats:", error);
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
    console.error("Error fetching writing prompts:", error);
    throw error;
  }
};

export const getTopic = async () => {
  try {
    const response = await axiosInstance.get('/writing/get-topics');
    return response.data;
  } catch (error) {
    console.error("Error generating topic:", error);
    throw error;
  }
};
