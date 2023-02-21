import { Module } from '@nestjs/common';
import { TokensController } from './tokens.controller';
import { Token } from './tokens.entity';
import { TokensService } from './tokens.service';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}
