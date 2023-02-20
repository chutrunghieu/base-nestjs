import { roles1676625537618 } from './src/migrations/1676625537618-roles';
import { users1676865299448 } from './src/migrations/1676865299448-users';
import { token1676865204737 } from './src/migrations/1676865204737-token';
import { DataSource } from 'typeorm';
import { User } from './src/users/users.entity'

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'chuhieu',
    password: 'acevip123',
    database: 'nestjs',
    entities: [User],
    migrations: [roles1676625537618, users1676865299448, token1676865204737],
    synchronize: true,
});

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
