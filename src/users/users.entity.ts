import { Role } from "src/roles/roles.entity";
import { Token } from "src/tokens/tokens.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"

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
   
    @OneToOne(() => Token, {onDelete: 'CASCADE'})
    @JoinColumn()
    token: Token;
}
