import { Request, Response } from 'express';
import { AuthService } from '../services';
import { asyncHandler } from '../utils/';
import { sendSuccess, sendError, sendBadRequest } from '../utils';

const authService = new AuthService();

// Register user
export const register = asyncHandler(async (req: Request, res: Response) => {
  const user = await authService.register(req.body);
  return sendSuccess(res, 'User registered successfully', user, 201);
});

// Login user
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return sendBadRequest(res, 'Email and password are required');

  const result = await authService.login(email, password);
  return sendSuccess(res, 'Login successful', result, 200);
});
