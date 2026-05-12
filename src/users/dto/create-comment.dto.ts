import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class createCommentDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    content!:String;

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    author!:String;



}