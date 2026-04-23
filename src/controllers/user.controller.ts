import { Request, Response } from 'express';
import { UserService } from '../services';
import { asyncHandler } from '../utils/';
import { sendResponse } from '../utils';

const userService = new UserService();

// Get all users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await userService.getAllUsers(req.user.id);
  return sendResponse(res, 'Users fetched successfully', users, 200);
});

// Get single user by ID
export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id as string);
  if (!user) return sendResponse(res, 'User not found', {}, 404);

  return sendResponse(res, 'User fetched successfully', user, 200);
});