// auth.validation.ts
import { z } from 'zod';
import { validateReqBody } from '../middlewares';

// Registration validation
const registerSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  email: z.email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Login validation
const loginSchema = z.object({
  email: z.email('Invalid email or Password'),
  password: z.string().min(8, 'Invalid email or Password'),
});

export const registerValidation = validateReqBody(registerSchema);
export const loginValidation = validateReqBody(loginSchema);
