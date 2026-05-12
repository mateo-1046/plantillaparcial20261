import { IsNotEmpty, IsNumber, IsOptional, IsPort, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    username!: string;


    @IsOptional()
    @IsString()
    bio!: string;

    @IsOptional()
    @Min(0)
    @IsNumber()
    followers!: number;
}
