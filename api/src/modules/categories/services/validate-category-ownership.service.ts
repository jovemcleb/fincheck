import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from 'src/shared/database/repositories/category.repository';

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async validate(userId: string, categoryId: string) {
    const isOwner = await this.categoryRepository.findFirst(userId, categoryId);

    if (!isOwner) {
      throw new NotFoundException('Category not found');
    }
  }
}
