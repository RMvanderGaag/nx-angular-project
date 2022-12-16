import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TokenMiddleware } from './auth/token.middleware';

import { DataModule } from './data.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://rmvandergaag:database@cluster0.ujbzewj.mongodb.net/concert-database?retryWrites=true&w=majority`
    ),
    DataModule,
    AuthModule,
    RouterModule.register(
      [
        {
          path: 'data-api',
          module: DataModule,
        },
        {
          path: 'auth-api',
          module: AuthModule,
        }
      ]
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware)
      .forRoutes('data-api');
  }
}
