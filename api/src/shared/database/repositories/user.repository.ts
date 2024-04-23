import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CategoryType } from '../../../types/categories';
import { SignupDto } from 'src/modules/auth/dto/signup.dto';

interface ICreateUserArgs {
  data: SignupDto;
  categories: {
    name: string;
    icon: string;
    type: CategoryType;
  }[];
}

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createWithCategories({ data, categories }: ICreateUserArgs) {
    return this.prismaService.user.create({
      data: {
        ...data,
        categories: {
          createMany: {
            data: categories,
          },
        },
      },
    });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}
