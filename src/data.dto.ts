import { IsNumber, IsString, MaxLength, MinLength } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DataDTO{
    
    @ApiProperty({ required:true })
    @IsString()
    @MinLength(10)
    @MaxLength(13)
    nui: string;
    
    @ApiProperty({ required: true })
    @IsString()
    @MinLength(10)
    @MaxLength(100)
    names: string;

    @ApiProperty({ required: true })
    @IsString()
    @MinLength(10)
    @MaxLength(100)
    surnames: string;

    @ApiProperty({ required: true })
    @IsNumber()
    telephone_number: number;

    @ApiProperty({ required: true })
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    plate: string;

    @ApiProperty({ required: true })
    @IsString()
    @MinLength(10)
    @MaxLength(100)
    name_image: string;


}