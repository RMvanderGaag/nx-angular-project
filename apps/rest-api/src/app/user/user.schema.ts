import { Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
});