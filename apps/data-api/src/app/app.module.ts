import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TokenMiddleware } from './auth/token.middleware';

import { DataModule } from './data.module';
import { Neo4jModule } from './neo4j/neo4j.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://rmvandergaag:broodjepaling45@cluster0.ujbzewj.mongodb.net/concert-database?retryWrites=true&w=majority`
    ),
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: process.env.NEO4J_HOST,
      username: process.env.NEO4J_USR,
      password: process.env.NEO4J_PWD,
      database: process.env.NEO4J_DATABASE,
    }),
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
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(TokenMiddleware)
  //     .forRoutes('data-api');
  // }
}
