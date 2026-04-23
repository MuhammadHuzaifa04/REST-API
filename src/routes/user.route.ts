import { Router } from 'express';
import { getUser, getUsers } from '../controllers';
import { authMiddleware } from '../middlewares';

export default class UserAPI {
  router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get('/', authMiddleware, getUsers);
    this.router.get('/:id', authMiddleware, getUser);
  }

  getRouter() {
    return this.router;
  }

  getRouterGroup() {
    return '/users';
  }
}
