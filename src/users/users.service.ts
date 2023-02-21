import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }
    async createUser(CreateUserDto: CreateUserDto): Promise<void> {
        const user = this.usersRepository.create(CreateUserDto);
        await this.usersRepository.save(user);
    }
    async updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<void> {
        const update = this.usersRepository
          .createQueryBuilder('users')
          .where('users.id = :id', { id });
    
        const userEntity = await update.getOne();
    
        this.usersRepository.merge(userEntity, UpdateUserDto);
    
        await this.usersRepository.save(UpdateUserDto);
      }
    
    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
      }
    
    async deleteUser(id: number): Promise<void> {
        const queryBuilder = this.usersRepository
          .createQueryBuilder('users')
          .where('users.id = :id', { id });
    
        const userEntity = await queryBuilder.getOne();

        await this.usersRepository.remove(userEntity);
      }
}
