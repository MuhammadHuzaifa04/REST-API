import { Router } from 'express';
import { getUser, getUsers } from '../controllers';
import { authMiddleware } from '../middlewares/';

const router = Router();

router.get('/users', authMiddleware, getUsers);
router.get('/users/:id', authMiddleware, getUser);

export default router;
