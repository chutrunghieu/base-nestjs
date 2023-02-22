import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './local.strategy';
@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService],
  controllers: [AuthController, JwtStrategy]
})
export class AuthModule {}
