import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../user/user.schema";
import { Identity, IdentityDocument } from "./identity.schema";
import { compare, hash } from 'bcrypt';
import { sign, JwtPayload, verify } from "jsonwebtoken";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Identity.name) private identityModel: Model<IdentityDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async createUser(email: string) {
        const user = new this.userModel({
            name: email.split('@')[0],
            email: email,
            birthday: new Date().getDate(),
            city: 'Breda'
        });
        await user.save();
        return user.id;
    }


    async registerUser(email: string, password: string) {
        const generatedHash = await hash(password, 12);
        const identity = new this.identityModel({
            email,
            password: generatedHash
        });
        await identity.save();
    }

    async generateToken(email: string, password: string): Promise<string> {
        const identity = await this.identityModel.findOne({ email });

        if (!identity || !(await compare(password, identity.password))) throw new Error("user not authorized");

        const user = await this.userModel.findOne({ email: email });

        return new Promise((resolve, reject) => {
            sign({ email, id: user.id }, process.env.JWT_SECRET, (err: Error, token: string) => {
                if (err) reject(err);
                else resolve(token);
            });
        })
    }

    async verifyToken(token: string) {
        console.log(token);
        // return new Promise((resolve, reject) => {
        //     verify(token, process.env.JWT_SECRET, (err, payload) => {
        //         if (err) reject(err);
        //         else resolve(payload);
        //     })
        // })
    }
}