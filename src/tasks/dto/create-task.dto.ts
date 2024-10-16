import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateTaskDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    title: string
    
    @IsString()
    @MinLength(3)
    description: string
}