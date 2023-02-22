import { IsNotEmpty, IsNumberString, IsEmail } from 'class-validator';

export class CreateUserDto {

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