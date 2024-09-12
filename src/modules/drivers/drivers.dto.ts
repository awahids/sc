import { IsNotEmpty, IsInt, IsString, IsOptional, IsNumber } from 'class-validator';

export class DriverSalaryQueryDto {
  @IsNotEmpty({ message: "month is required" })
  @IsNumber()
  month: number;

  @IsNotEmpty({ message: "year is required" })
  @IsNumber()
  year: number;

  @IsOptional()
  @IsNumber()
  page_size?: number;

  @IsOptional()
  @IsNumber()
  current?: number;

  @IsOptional()
  @IsString()
  driver_code?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
