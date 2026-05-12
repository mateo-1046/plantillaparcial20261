import { IsNotEmpty, IsString, Min } from "class-validator";

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    caption!:string;

    @Min(0)
    likes: number = 0;
}
