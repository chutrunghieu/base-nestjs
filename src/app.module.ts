import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity'
import { roles1676625537618 } from './migrations/1676625537618-roles';
import { users1676865299448 } from './migrations/1676865299448-users';
import { token1676865204737 } from './migrations/1676865204737-token';
import { RolesModule } from './roles/roles.module';
import { TokensModule } from './tokens/tokens.module';
import { RolesController } from './roles/roles.controller';
import { RolesService } from "./roles/roles.service";
import { TokensController } from './tokens/tokens.controller';
import { TokensService } from './tokens/tokens.service';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'chuhieu',
      password: 'acevip123',
      database: 'nestjs',
      entities: [User],
      migrations: [roles1676625537618, users1676865299448, token1676865204737],
      synchronize: true,
    }),
    RolesModule,
    TokensModule,
  ],
  controllers: [AppController, UsersController, RolesController, TokensController],
  providers: [AppService, UsersService, RolesService, TokensService],
})
export class AppModule {
}
