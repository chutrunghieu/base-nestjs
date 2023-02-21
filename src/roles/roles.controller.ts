import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
@Controller('roles')
export class RolesController {
     constructor(
    private roleService: RolesService,
  ) { }
  @Post('/addRole')
  @HttpCode(200)
  async create(@Body() CreateRoleDto: CreateRoleDto, @Res() res: Response) {
    return await this.roleService.createRole(CreateRoleDto);
  }
}
