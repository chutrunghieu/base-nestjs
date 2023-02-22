import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}
  
    async validateUser(email: string, password: string): Promise<any> {
      const user = await this.usersService.findOne(email);
      const checkPass = await bcrypt.compare(password, user.password)
      if (user && checkPass) {
        const { password, ...result } = user;
        return result;
      } else {
        return null;
      }
    }
  }