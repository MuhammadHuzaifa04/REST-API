import { User, IUser } from '../models';

export class UserService {
  async getAllUsers(currentUserId: string): Promise<IUser[]> {
    const users = await User.find({ _id: { $ne: currentUserId } });
    return users;
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = await User.findById(id);
    return user; //return like this
  }
}
