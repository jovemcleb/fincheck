import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateBankAccountDto } from 'src/modules/bank-accounts/dto/create-bank-account.dto';
import { UpdateBankAccountDto } from 'src/modules/bank-accounts/dto/update-bank-account.dto';

@Injectable()
export class BankAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;
    return this.prismaService.bankAccount.create({
      data: {
        name,
        initialBalance,
        color,
        type,
        userId: userId,
      },
    });
  }

  findManyByUserId(userId: string) {
    return this.prismaService.bankAccount.findMany({ where: { userId } });
  }

  findFirst(userId: string, bankAccountId: string) {
    return this.prismaService.bankAccount.findFirst({
      where: { userId, id: bankAccountId },
    });
  }

  update(bankAccountId: string, updateBankAccountDto: UpdateBankAccountDto) {
    const { color, initialBalance, name, type } = updateBankAccountDto;
    return this.prismaService.bankAccount.update({
      where: { id: bankAccountId },
      data: {
        name,
        initialBalance,
        color,
        type,
      },
    });
  }

  delete(bankAccountId: string) {
    return this.prismaService.bankAccount.delete({
      where: { id: bankAccountId },
    });
  }
}
