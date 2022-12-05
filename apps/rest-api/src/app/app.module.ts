import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION_STRING } from '../constants';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(MONGO_CONNECTION_STRING),
  ],
})
export class AppModule { }
