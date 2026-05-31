type ApiMessage = {
  title?: string;
  message?: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const getApiMessage = (
  data: unknown,
  fallback = "Something went wrong. Please try again.",
) => {
  if (!isRecord(data)) return fallback;

  if (typeof data.message === "string") return data.message;

  if (isRecord(data.response) && typeof data.response.message === "string") {
    return data.response.message;
  }

  if (isRecord(data.error) && typeof data.error.message === "string") {
    return data.error.message;
  }

  if (typeof data.error === "string") return data.error;

  return fallback;
};

export const getApiTitle = (data: unknown) => {
  if (!isRecord(data)) return undefined;

  if (typeof data.title === "string") return data.title;

  const response = data.response as ApiMessage | undefined;
  if (isRecord(response) && typeof response.title === "string") {
    return response.title;
  }

  const error = data.error as ApiMessage | undefined;
  if (isRecord(error) && typeof error.title === "string") {
    return error.title;
  }

  return undefined;
};

export const getApiErrorMessage = (
  error: unknown,
  fallback = "Something went wrong. Please try again.",
) => {
  if (!isRecord(error)) return fallback;

  if (typeof error.userMessage === "string") return error.userMessage;

  const response = error.response;
  if (isRecord(response) && "data" in response) {
    return getApiMessage(response.data, fallback);
  }

  if (typeof error.message === "string") return error.message;

  return fallback;
};
