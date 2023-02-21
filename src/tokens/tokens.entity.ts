import { User } from "../users/users.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @OneToOne(() => User, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User;
}
