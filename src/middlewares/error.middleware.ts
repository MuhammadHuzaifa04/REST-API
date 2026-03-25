import { Request, Response, NextFunction } from 'express';
import { ERROR_CODES } from '../utils';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(ERROR_CODES.USER_NOT_FOUND.status).json({
    success: false,
    message: ERROR_CODES.USER_NOT_FOUND.message,
  });
};
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || ERROR_CODES.INTERNAL_SERVER.status;
  const message = err.message || ERROR_CODES.INTERNAL_SERVER.message;

  res.status(statusCode).json({
    success: false,
    message,

    //not found
  });
};
