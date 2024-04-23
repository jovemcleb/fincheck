import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SigninDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'Senha deve ser uma string' })
  @IsNotEmpty()
  @MinLength(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
  password: string;
}
