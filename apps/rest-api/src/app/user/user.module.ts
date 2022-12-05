import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserSchema } from './user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserRepository],
})

export class UserModule { }