import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from "../users/users.service";
import { User, UserSchema } from "../users/users.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "../users/users.module";

@Module({
  providers: [AuthService],
  imports: [UsersModule],
})
export class AuthModule {}
