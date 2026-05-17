import axios from 'axios';

// Backend URL is injected at runtime by the server (layout.js) so Railway env vars work without rebuild
// Backend default port is 3000 (see backend/index.js)
const getBaseURL = () => {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/';
};

// Use a shorter default timeout so normal APIs fail fast; slow endpoints (AI, chat, reports) pass their own timeout in their api files.
// This avoids long waits on hanging requests. To make slow APIs actually faster: backend caching, faster Gemini model, streaming, lighter DB queries.
const DEFAULT_TIMEOUT_MS = 15000;

const MUTATING_METHODS = new Set(["post", "put", "patch", "delete"]);

let csrfToken: string | null = null;
let csrfFetchPromise: Promise<string> | null = null;

async function fetchCsrfToken(): Promise<string> {
  const response = await axios.get<{ csrfToken: string }>(
    `${getBaseURL()}csrf-token`,
    { withCredentials: true },
  );
  csrfToken = response.data.csrfToken;
  return csrfToken;
}

async function ensureCsrfToken(): Promise<string> {
  if (csrfToken) return csrfToken;
  if (!csrfFetchPromise) {
    csrfFetchPromise = fetchCsrfToken().finally(() => {
      csrfFetchPromise = null;
    });
  }
  return csrfFetchPromise;
}

export function clearCsrfToken() {
  csrfToken = null;
}

const axiosInstance = axios.create({
    baseURL: getBaseURL(),
    timeout: DEFAULT_TIMEOUT_MS,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Important: this sends cookies
});

// Request interceptor: baseURL, CSRF on mutating requests
axiosInstance.interceptors.request.use(
    async (config) => {
        config.baseURL = getBaseURL();

        // Let browser set Content-Type with boundary for FormData (file uploads)
        if (config.data instanceof FormData) {
            delete config.headers['Content-Type'];
        }

        const method = (config.method ?? 'get').toLowerCase();
        if (MUTATING_METHODS.has(method)) {
            const token = await ensureCsrfToken();
            if (config.headers && typeof config.headers.set === 'function') {
                config.headers.set('X-CSRF-Token', token);
            } else {
                config.headers = { ...config.headers, 'X-CSRF-Token': token };
            }
        }

        return config;
    },
    (error) => Promise.reject(error),
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

                    try {
                        // Call refresh endpoint (cookies are sent automatically with withCredentials: true)
                        await axiosInstance.post('auth/refresh', {});
                        
                        // Retry original request (new cookies will be sent automatically)
                        return axiosInstance(originalRequest);
                    } catch (refreshError) {
                        // Refresh failed - redirect to login if we are not already on a public page
                        // For now, let's just redirect as it was before, but more safely
                        if (typeof window !== 'undefined') {
                            window.location.href = '/auth/login';
                        }
                        
                        return Promise.reject(refreshError);
                    }
                } else {
                    // Auth request failed (like /auth/me) - just reject it without redirecting.
                    // This allows pages to handle unauthenticated state (e.g. show landing page).
                    return Promise.reject(error);
                }
            } else if (status === 403) {
                const isCsrfError =
                    data?.message === 'Invalid CSRF token' ||
                    (error as { code?: string }).code === 'EBADCSRFTOKEN';

                if (isCsrfError && !originalRequest._csrfRetry) {
                    originalRequest._csrfRetry = true;
                    clearCsrfToken();
                    try {
                        const token = await fetchCsrfToken();
                        if (originalRequest.headers?.set) {
                            originalRequest.headers.set('X-CSRF-Token', token);
                        } else {
                            originalRequest.headers = {
                                ...originalRequest.headers,
                                'X-CSRF-Token': token,
                            };
                        }
                        return axiosInstance(originalRequest);
                    } catch {
                        return Promise.reject(error);
                    }
                }
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