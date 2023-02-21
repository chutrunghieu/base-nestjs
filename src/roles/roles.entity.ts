import { User } from "../users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.role, {onDelete: 'SET NULL'})
    users: User[];
}
