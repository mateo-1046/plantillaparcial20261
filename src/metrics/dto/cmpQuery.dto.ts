import { Type } from "class-transformer";
import { Min } from "class-validator";

export class cmpQueryDto {

    @Type(() => Number)
    @Min(0)
    cost!: number;         
    
    @Type(() => Number)
    @Min(0)
    impressions!: number;           


}