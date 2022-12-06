import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';

import { User } from '@concert-project/user';
//import { InjectToken, Token } from '../auth/token.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }
}
