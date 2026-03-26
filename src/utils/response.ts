import { Response } from 'express';

interface ResponseData {
  success: boolean;
  message: string;
  data?: any;
  errors?: any;
}

export const sendSuccess = (
  res: Response,
  message: string,
  data: any = {},
  statusCode: number = 200
) => {
  const response: ResponseData = {
    success: true,
    message,
    data,
  };
  return res.status(statusCode).json(response);
};

export const sendError = (
  res: Response,
  message: string,
  errors: any = {},
  statusCode: number = 500
) => {
  const response: ResponseData = {
    success: false,
    message,
    errors,
  };
  return res.status(statusCode).json(response);
};

export const sendNotFound = (
  res: Response,
  message: string = 'Resource not found'
) => {
  return sendError(res, message, {}, 404);
};

export const sendUnauthorized = (
  res: Response,
  message: string = 'Unauthorized'
) => {
  return sendError(res, message, {}, 401);
};

export const sendBadRequest = (
  res: Response,
  message: string = 'Bad request',
  errors: any = {}
) => {
  return sendError(res, message, errors, 400);
};
