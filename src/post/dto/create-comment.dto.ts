import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCommentDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    content!:String;

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    author!:String;



}