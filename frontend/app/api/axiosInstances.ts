import axios from 'axios';
import { tokenManager } from '@/lib/tokenManager';

// Backend URL is injected at runtime by the server (layout.js) so Railway env vars work without rebuild
// Backend default port is 3000 (see backend/index.js)
const getBaseURL = () => {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/';
};

// Use a shorter default timeout so normal APIs fail fast; slow endpoints (AI, chat, reports) pass their own timeout in their api files.
// This avoids long waits on hanging requests. To make slow APIs actually faster: backend caching, faster Gemini model, streaming, lighter DB queries.
const DEFAULT_TIMEOUT_MS = 15000;

const axiosInstance = axios.create({
    baseURL: getBaseURL(),
    timeout: DEFAULT_TIMEOUT_MS,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Request interceptor to add auth token and ensure correct baseURL (runtime-injected)
axiosInstance.interceptors.request.use(
    (config) => {
        config.baseURL = getBaseURL();
        // Get token from token manager
        const token = tokenManager.getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Let browser set Content-Type with boundary for FormData (file uploads)
        if (config.data instanceof FormData) {
            delete config.headers['Content-Type'];
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling and token refresh
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Handle common errors
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;

            if (status === 401 && !originalRequest._retry) {
                // Don't retry for auth endpoints themselves
                const isAuthRequest = originalRequest?.url?.includes('/auth/');
                
                if (!isAuthRequest) {
                    // Mark request as retried to prevent infinite loops
                    originalRequest._retry = true;

                    // If already refreshing, queue the request
                    if (tokenManager.isRefreshing()) {
                        return new Promise((resolve) => {
                            tokenManager.addRefreshSubscriber((token: string) => {
                                originalRequest.headers.Authorization = `Bearer ${token}`;
                                resolve(axiosInstance(originalRequest));
                            });
                        });
                    }

                    // Start refresh process
                    tokenManager.setRefreshing(true);

                    try {
                        // Call refresh endpoint
                        const response = await axios.post(
                            getBaseURL() + 'auth/refresh',
                            {},
                            { withCredentials: true }
                        );

                        const newAccessToken = response.data.accessToken;
                        
                        // Update token manager
                        tokenManager.setAccessToken(newAccessToken);
                        
                        // Notify all queued requests
                        tokenManager.notifyRefreshSubscribers(newAccessToken);
                        
                        // Retry original request with new token
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return axiosInstance(originalRequest);
                    } catch (refreshError) {
                        // Refresh failed - clear tokens and redirect to login
                        tokenManager.clearAccessToken();
                        tokenManager.clearRefreshSubscribers();
                        
                        if (typeof window !== 'undefined') {
                            window.location.href = '/auth/login';
                        }
                        
                        return Promise.reject(refreshError);
                    } finally {
                        tokenManager.setRefreshing(false);
                    }
                } else {
                    // Auth request failed - redirect to login
                    if (typeof window !== 'undefined') {
                        tokenManager.clearAccessToken();
                        window.location.href = '/auth/login';
                    }
                }
            } else if (status === 403) {
                // 403 is handled by the calling code (e.g. login blocked dialog, route guards)
            } else if (status === 500) {
                // Server error (data may be null if response body is empty or non-JSON)
                console.error('Server error:', data?.message ?? data ?? error.message ?? status);
            }
        } else if (error.request) {
            // Request was made but no response received (server down, wrong URL, timeout, CORS, network)
            const url = error.config?.baseURL || getBaseURL();
            const msg = 'Cannot reach server. Is the backend running? Check ' + (typeof window !== 'undefined' ? url : 'NEXT_PUBLIC_BACKEND_URL');
            console.warn('[API]', msg);
            error.userMessage = error.code === 'ECONNABORTED'
                ? 'Request timed out. The server may be slow or unavailable.'
                : msg;
        } else {
            // Something else happened
            console.error('Error:', error.message);
            error.userMessage = error.message;
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;