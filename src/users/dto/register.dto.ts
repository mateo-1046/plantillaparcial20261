import { IsEmail, IsNotEmpty, IsString, Max, MaxLength } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    name!: string;

    @IsEmail()
    email!: string;

}