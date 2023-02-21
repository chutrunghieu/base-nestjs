import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { roles1676625537618 } from './migrations/1676625537618-roles';
import { users1676865299448 } from './migrations/1676865299448-users';
import { token1676865304737 } from './migrations/1676865304737-token';
import { RolesModule } from './roles/roles.module';
import { TokensModule } from './tokens/tokens.module';
import { RolesController } from './roles/roles.controller';
import { RolesService } from "./roles/roles.service";
import { TokensController } from './tokens/tokens.controller';
import { TokensService } from './tokens/tokens.service';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'chuhieu',
      password: 'acevip123',
      database: 'nestjs',
      autoLoadEntities: true,
      migrations: [roles1676625537618, token1676865304737, users1676865299448],
      synchronize: false,
    }),
    RolesModule,
    TokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
