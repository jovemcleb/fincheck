import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/shared/database/repositories/category.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findAllByUserId(userId: string) {
    const categories = await this.categoryRepository.findManyById(userId);
    return categories;
  }
}
