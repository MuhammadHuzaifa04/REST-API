import { Request, Response } from 'express';
import { UserService } from '../services';
import { asyncHandler } from '../utils/';
import { sendSuccess, sendNotFound, sendError } from '../utils';

const userService = new UserService();

// Get all users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.getAllUsers(req.user.id);
  return sendSuccess(res, 'Users fetched successfully', users, 200);
});

// Get single user by ID
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id as string);
  if (!user) return sendNotFound(res, 'User not found');

  return sendSuccess(res, 'User fetched successfully', user, 200);
});