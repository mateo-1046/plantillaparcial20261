import { IsNotEmpty, IsNumber, IsOptional, IsPort, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    
    username!: string;


    @IsOptional()
    @IsString()
    bio!: string;

    @IsOptional()
    @Min(0)
    @IsNumber()
    followers!: number;
}
