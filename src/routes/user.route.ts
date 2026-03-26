import { Router } from 'express';
import { getUser, getUsers } from '../controllers';
import { authMiddleware } from '../middlewares/';

export class UserRouter {
  public user_router: Router;

  constructor() {
    this.user_router = Router();
    this.init();
  }

  private init(): void {
    this.user_router.get('/users', authMiddleware, getUsers);

    this.user_router.get('/users/:id', authMiddleware, getUser);
  }
}

export default new UserRouter().user_router;
