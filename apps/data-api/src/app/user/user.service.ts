import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from './user.schema';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findOne({ id: id });
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.remove({ id: id });
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async updateUser(id: string, user: User): Promise<User> {
    return this.userModel.findOneAndUpdate({ id: id }, user, { new: true });
  }

  async getSelf(id: string): Promise<User> {
    const user = await this.userModel.findOne({ id: id });

    if (user == null) return null;

    return user
  }
}
