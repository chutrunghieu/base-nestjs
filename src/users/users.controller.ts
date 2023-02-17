import { Controller, Get, Query, Post, Body, Put, Param, Delete  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
    @Post()
    create(@Body() CreateUserDto: CreateUserDto) {
      return 'This action adds a new cat';
    }
}
