import { Response } from 'express';

export const sendResponse = (
  res: Response,
  message: string,
  data: any,
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    statusCode,
    message,
    data,
  });
};
