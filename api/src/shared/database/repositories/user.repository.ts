import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../modules/users/dto/create-user.dto';
import { PrismaService } from '../prisma.service';
import { CategoryType } from '../../../types/categories';

interface ICreateUserArgs {
  data: CreateUserDto;
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
}
