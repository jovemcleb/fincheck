import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { CategoryRepository } from './repositories/category.repository';
import { BankAccountRepository } from './repositories/bank-accounts.repository';
@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoryRepository,
    BankAccountRepository,
  ],
  exports: [UserRepository, CategoryRepository, BankAccountRepository],
})
export class DatabaseModule {}
