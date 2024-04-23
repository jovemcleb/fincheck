import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }

  async signin({ email, password }: SigninDto) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = await this.generateToken(user.id);

    return { token };
  }

  async signup(signupDto: SignupDto) {
    const userEmailAlreadyExists = await this.userRepository.findByEmail(
      signupDto.email,
    );

    if (userEmailAlreadyExists) {
      throw new ConflictException('Email já está sendo usado');
    }

    const hashedPassword = await hash(signupDto.password, 10);

    const user = await this.userRepository.createWithCategories({
      data: {
        email: signupDto.email,
        name: signupDto.name,
        password: hashedPassword,
      },
      categories: [
        { name: 'Salário', icon: 'salary', type: 'INCOME' },
        { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
        { name: 'Outro', icon: 'other', type: 'INCOME' },
        { name: 'Casa', icon: 'home', type: 'EXPENSE' },
        { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
        { name: 'Educação', icon: 'education', type: 'EXPENSE' },
        { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
        { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
        { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
        { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
        { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
        { name: 'Outro', icon: 'other', type: 'EXPENSE' },
      ],
    });

    const token = await this.generateToken(user.id);

    return { token };
  }
}
