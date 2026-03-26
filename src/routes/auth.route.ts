import { Router } from 'express';
import { register, login } from '../controllers';
import { loginValidation, registerValidation } from '../validations';

class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init(): void {
    this.router.post('/auth/register', registerValidation, register);

    this.router.post('/auth/login', loginValidation, login);
  }
}

export default new AuthRouter().router;
