import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class SignupInputDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  email: string;

  @Transform(({ value }) => value.toLowerCase(), { toClassOnly: true })
  @IsNotEmpty()
  username: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(4, 6)
  staffId: string;

  @IsNotEmpty()
  @Length(8)
  password: string;
}
