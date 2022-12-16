import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type IdentityDocument = Identity & Document;

@Schema()
export class Identity {
    @Prop({
        required: true,
        unique: true,
    })
    email: string;

    @Prop({
        requied: true
    })
    password: string;
}

export const IdentitySchema = SchemaFactory.createForClass(Identity);