import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Length,
} from 'class-validator';

export class LoginInputDto {
  @IsEmail()
  @IsOptional()
  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  email?: string;

  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  @IsOptional()
  username?: string;

  @IsNumberString()
  @IsOptional()
  @Length(4, 6)
  staffId?: string;

  @IsNotEmpty()
  @Length(8)
  password: string;
}
