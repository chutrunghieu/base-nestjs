import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Cache} from 'cache-manager';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @Inject(CACHE_MANAGER) private readonly cache: Cache
    ) { }
    async createUser(CreateUserDto: CreateUserDto): Promise<User> {
      console.log(CreateUserDto);
        const user = this.usersRepository.create(CreateUserDto);
        return await this.usersRepository.save(user);
    }
    async updateUser(id: number, UpdateUserDto: UpdateUserDto): Promise<void> {
        const update = this.usersRepository
          .createQueryBuilder('user')
          .where('user.id = :id', { id });
    
        const userEntity = await update.getOne();
    
        this.usersRepository.merge(userEntity, UpdateUserDto);
    
        await this.usersRepository.save(UpdateUserDto);
      }
    
    async findAll(): Promise<User[]> {
        const users = await this.usersRepository.find();
        return users
      }
    
    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
      }
    
    async deleteUser(id: number): Promise<void> {
        const queryBuilder = this.usersRepository
          .createQueryBuilder('user')
          .where('user.id = :id', { id });
    
        const userEntity = await queryBuilder.getOne();

        await this.usersRepository.remove(userEntity);
      }
}
