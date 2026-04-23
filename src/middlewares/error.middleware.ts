import { Request, Response, NextFunction } from 'express';
import { sendResponse } from '../utils/response';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return sendResponse(res, 'API endpoint not found', {}, 404);
};
export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return sendResponse(res, 'Internal Server Error', {}, 500);
};
