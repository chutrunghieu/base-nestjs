import { Role } from "src/roles/roles.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    age: number;

    @ManyToOne(() => Role, (role) => role.users, {onDelete: 'SET NULL'})
    role: Role;
}
