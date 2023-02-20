import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Token {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
}
