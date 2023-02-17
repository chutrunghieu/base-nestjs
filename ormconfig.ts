import { DataSource } from 'typeorm';
import { User } from './src/users/users.entity'

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'nestjs',
    entities: [User],
    migrations: ["./src/migration/*.ts"],
    synchronize: true,
});
dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })