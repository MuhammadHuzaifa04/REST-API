import { Request, Response } from 'express';
import { AuthService } from '../services';
import { asyncHandler } from '../utils/';

const authService = new AuthService();

export async function register(req: Request, res: Response) {
  const user = await authService.register(req.body);
  res.json({ success: true, data: user });
}

export async function login(req: Request, res: Response) {
  const result = await authService.login(req.body.email, req.body.password);
  res.json({ success: true, data: result });
}