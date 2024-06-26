import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findManyById(userId: string) {
    return this.prismaService.category.findMany({ where: { userId } });
  }

  async findFirst(userId: string, categoryId: string) {
    return this.prismaService.category.findFirst({
      where: { id: categoryId, userId },
    });
  }
}
