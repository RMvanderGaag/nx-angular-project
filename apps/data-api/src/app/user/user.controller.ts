import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UserService } from './user.service';

import { User } from './user.schema';
//import { InjectToken, Token } from '../auth/token.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.updateUser(id, user);
  }
}
