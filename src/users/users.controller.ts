import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private userService:UsersService) {
  }

  @Get('/test')
  testFunc(){
    return 'Test test!!'
  }

  @Post('/createUser')
  createUser(@Body() dto: CreateUserDto) {
      return this.userService.create_user(dto)
  }

  @Get('/getUsers')
  getUsers(){
    return this.userService.get_users()
  }


}
