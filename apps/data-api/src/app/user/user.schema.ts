import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ index: true })
  id!: string;

  @Prop({
    required: true,
    unique: true,
  })
  name!: string;

  @Prop({
    required: true,
  })
  email!: string;

  @Prop({
    required: true,
  })
  city!: string;

  @Prop({
    required: true,
  })
  birthday!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
