import { STATUS } from "./statusCodes.js";

const normalizeResponse = (response) => {
  if (!response) return { title: undefined, message: undefined };

  if (typeof response === "string") {
    return { title: undefined, message: response };
  }

  return {
    title: response.title,
    message: response.message,
  };
};

export const successResponse = (
  res,
  data = {},
  response = null,
  status = STATUS.OK
) => {
  const { title, message } = normalizeResponse(response);

  return res.status(status).json({
    success: true,
    response,
    title,
    message,
    ...data,
  });
};

export const errorResponse = (
  res,
  error,
  status = STATUS.INTERNAL_SERVER_ERROR,
  extra = {}
) => {
  const { title, message } = normalizeResponse(error);

  return res.status(status).json({
    success: false,
    error,
    title,
    message,
    ...extra,
  });
};
