import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from "./roles.entity";

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
    ) {}
    async createRole(createRoleDto: CreateRoleDto) {
        const role = this.roleRepository.create(createRoleDto);
        const newRole = await this.roleRepository.save(role);
        return newRole
    }
}
