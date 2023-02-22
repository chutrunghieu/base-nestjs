import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpCode, UseInterceptors, CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from "./users.service";
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
  ) { }
  @Post('/addUser')
  @HttpCode(200)
  async create(@Body() CreateUserDto: CreateUserDto, @Res() res: Response) {
    CreateUserDto.password = await bcrypt.hash(CreateUserDto.password, 10);
    const newUser = await this.userService.createUser(CreateUserDto);
    return { message: 'Success!', data: { newUser } }
  }
  @Delete('/deleteUser/:id')
  @HttpCode(200)
  delete(id: number, @Res() res: Response) {
    const deleteUser = this.userService.deleteUser(id);
    return { message: 'Success!', data: { deleteUser } };
  }
  @Get('/getAllUser')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('users')
  @CacheTTL(1000)
  @HttpCode(200)
  async getAll() {
    const getAll = await this.userService.findAll();
    return { message: 'Success!', data: { getAll } };
  }
  @Get('/getUser')
  @HttpCode(200)
  async getOne(id: number) {
    const getOne = await this.userService.findById(id);
    return { message: 'Success!', data: { getOne } };
  }
  @Put('/updateUser/:id')
  @HttpCode(200)
  async update(@Param() id: number, @Body() UpdateUserDto: UpdateUserDto) {
    const updateUser = await this.userService.updateUser(id, UpdateUserDto)
    return { message: 'Success!', data: { updateUser } };
  }
}
