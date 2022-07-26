import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./users.schema";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async create_user( dto: CreateUserDto ) {
      return await this.userModel.create(dto);
  }
  async get_users() {
    return this.userModel.find();
  }
  async findOne( s : string ) {
    return this.userModel.findOne({name:s})
  }
}
