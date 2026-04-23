import { Request, Response } from 'express';
import { AuthService } from '../services';
import { asyncHandler } from '../utils/';
import { sendResponse } from '../utils';

const authService = new AuthService();

// Register user
export const register = asyncHandler(async (req: Request, res: Response) => {
  const user = await authService.register(req.body);
  return sendResponse(res, 'User registered successfully', user, 201);
});

// Login user
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password)
    return sendResponse(res, 'Email and password are required', {}, 400);

  const result = await authService.login(email, password);
  return sendResponse(res, 'Login successful', result, 200);
});   
