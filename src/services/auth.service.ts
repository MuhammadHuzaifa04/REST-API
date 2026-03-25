import { User, IUser } from '../models';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/';
import { AppError } from '../utils';
import { ERROR_CODES } from '../utils/';

export class AuthService {
  async register(payload: IUser) {
    const existing = await User.findOne({ email: payload.email });
    if (existing)
      throw new AppError(
        ERROR_CODES.USER_EXISTS.message,
        ERROR_CODES.USER_EXISTS.status
      );

    const hashed = await bcrypt.hash(payload.password, 10);
    payload.password = hashed;

    return await User.create(payload);
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user)
      throw new AppError(
        ERROR_CODES.USER_NOT_FOUND.message,
        ERROR_CODES.USER_NOT_FOUND.status
      );

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      throw new AppError(
        ERROR_CODES.INVALID_CREDENTIALS.message,
        ERROR_CODES.INVALID_CREDENTIALS.status
      );

    const token = generateToken(user._id.toString());
    return { user, token };
  }
}
