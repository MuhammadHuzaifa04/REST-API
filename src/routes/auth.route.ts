import { Router } from 'express';
import { register, login } from '../controllers';
import { loginValidation, registerValidation } from '../validations';

const router = Router();

router.post(
  '/auth/register',
  registerValidation,
  register
);
router.post('/auth/login', loginValidation, login);
export default router;
