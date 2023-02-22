import { Role } from "../roles/roles.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    roleID: number;

    @ManyToOne(() => Role, (role) => role.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    })
    @JoinColumn({name : 'id'})
    role: Role;
}
