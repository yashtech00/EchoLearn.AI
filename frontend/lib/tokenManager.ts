// Token manager to handle access token in memory and refresh logic
let accessToken: string | null = null;
let isRefreshing: boolean = false;
let refreshSubscribers: Array<(token: string) => void> = [];

export const tokenManager = {
  setAccessToken: (token: string) => {
    accessToken = token;
    // Also store in localStorage as backup
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },

  getAccessToken: () => {
    // Check memory first, then localStorage
    if (!accessToken && typeof window !== 'undefined') {
      accessToken = localStorage.getItem('token');
    }
    return accessToken;
  },

  clearAccessToken: () => {
    accessToken = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  },

  isRefreshing: () => isRefreshing,

  setRefreshing: (value: boolean) => {
    isRefreshing = value;
  },

  addRefreshSubscriber: (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
  },

  notifyRefreshSubscribers: (token: string) => {
    refreshSubscribers.forEach(callback => callback(token));
    refreshSubscribers = [];
  },

  clearRefreshSubscribers: () => {
    refreshSubscribers = [];
  }
};
