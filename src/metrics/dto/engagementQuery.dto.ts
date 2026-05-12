import { Type } from "class-transformer";
import {  Min } from "class-validator";

export class EngagementQueryDto {

    @Type(() => Number)
    @Min(0)
    likes!:number;

    @Type(() => Number)
    @Min(0)
    comments!:number;


    @Type(() => Number)
    @Min(1)
    followers!:number;
}


