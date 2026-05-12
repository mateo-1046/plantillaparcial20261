import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class createPostDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
   caption!:string;

    @IsOptional()
    @Min(0)
    @IsNumber()
    followers: number = 0;

}