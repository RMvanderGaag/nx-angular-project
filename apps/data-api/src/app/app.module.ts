import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { DataModule } from './data.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://rmvandergaag:database@cluster0.ujbzewj.mongodb.net/concert-database?retryWrites=true&w=majority`
    ),
    DataModule,
    RouterModule.register(
      [
        {
          path: 'data-api',
          module: DataModule,
        }
      ]
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
