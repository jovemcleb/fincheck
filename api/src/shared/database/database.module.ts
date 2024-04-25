import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { CategoryRepository } from './repositories/category.repository';
import { BankAccountRepository } from './repositories/bank-accounts.repository';
import { TransactionRepository } from './repositories/transaction.repository';
@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoryRepository,
    BankAccountRepository,
    TransactionRepository,
  ],
  exports: [
    UserRepository,
    CategoryRepository,
    BankAccountRepository,
    TransactionRepository,
  ],
})
export class DatabaseModule {}
