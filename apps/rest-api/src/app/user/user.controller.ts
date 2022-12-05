import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { User } from '@concert-project/user';
import { UserRepository } from './user.repository';

@Controller()
export class UserController {
    constructor(private userRepository: UserRepository) { }

    @Get('/api/users')
    async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    @Put('/api/users/:userId')
    async updateUser(@Param("userId") userId: string, @Body() changes: Partial<User>) {
        console.log('Updating user!')
        return this.userRepository.updateUser();
    }
}