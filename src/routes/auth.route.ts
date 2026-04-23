import { Router } from 'express';
import { register, login } from '../controllers';
import { loginValidation, registerValidation } from '../validations';

export default class AuthAPI {
  router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post('/register', registerValidation, register);
    this.router.post('/login', loginValidation, login);
  }

  getRouter() {
    return this.router;
  }

  getRouterGroup() {
    return '/auth';
  }
}
