import { Request, Response } from 'express';
import { UserService, AuthService } from '../services';
import { asyncHandler } from '../utils/';

const userService = new UserService();

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getAllUsers(req.user.id);
  res.json({ success: true, data: users });
}

export async function getUser(req: Request, res: Response) {
  const user = await userService.getUserById(req.params.id as string);
  res.json({ success: true, data: user });
}
