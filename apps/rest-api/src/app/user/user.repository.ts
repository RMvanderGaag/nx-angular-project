import { Injectable } from "@angular/core";
import { User } from "@concert-project/user";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserRepository {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async updateUser() {
        throw new Error('Method not implemented.');
    }
}