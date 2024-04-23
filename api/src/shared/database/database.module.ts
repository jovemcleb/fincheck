import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { CategoryRepository } from './repositories/category.repository';
@Global()
@Module({
  providers: [PrismaService, UserRepository, CategoryRepository],
  exports: [UserRepository, CategoryRepository],
})
export class DatabaseModule {}
