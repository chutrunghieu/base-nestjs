import { Module } from '@nestjs/common';
import { TokenController } from './token/token.controller';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';

@Module({
  controllers: [TokenController, TokensController],
  providers: [TokensService]
})
export class TokensModule {}
