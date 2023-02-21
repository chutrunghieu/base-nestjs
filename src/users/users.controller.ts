import { Controller, Get, Query, Post, Body, Put, Param, Delete, Res, HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from "./users.service";
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
  ) { }
  @Post('addUser')
  @HttpCode(200)
  async create(@Body() CreateUserDto: CreateUserDto, @Res() res: Response) {
    const addUser = await this.userService.createUser(CreateUserDto);
    return { message: 'Success!', data: { addUser } };
  }
  @Delete('deleteUser/:id')
  @HttpCode(200)
  async delete(id: number, @Res() res: Response) {
    const deleteUser = await this.userService.deleteUser(id);
    return { message: 'Success!', data: { deleteUser } };
  }
  @Get('getAllUser')
  @HttpCode(200)
  async getAll() {
    const getAll = await this.userService.findAll();
    return { message: 'Success!', data: { getAll } };
  }
  @Get('getUser')
  @HttpCode(200)
  async getOne(id: number) {
    const getOne = await this.userService.findOne(id);
    return { message: 'Success!', data: { getOne } };
  }
  @Put('updateUser/:id')
  @HttpCode(200)
  async update(@Param() id: number, @Body() UpdateUserDto: UpdateUserDto) {
    const updateUser = await this.userService.updateUser(id, UpdateUserDto)
    return { message: 'Success!', data: { updateUser } };
  }
}
