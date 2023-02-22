import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    // @IsNumberString()
    age: number;
    
    @IsNotEmpty()
    roleID: number;

}