import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTransactionDto } from 'src/modules/transactions/dto/create-transaction.dto';
import { UpdateTransactionDto } from 'src/modules/transactions/dto/update-transaction.dto';

@Injectable()
export class TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, date, name, type, value } =
      createTransactionDto;
    return this.prismaService.transaction.create({
      data: { bankAccountId, date, name, type, value, userId, categoryId },
    });
  }

  findManyByUserId(userId: string) {
    return this.prismaService.transaction.findMany({ where: { userId } });
  }

  findFirst(userId: string, transactionId: string) {
    return this.prismaService.transaction.findFirst({
      where: { userId, id: transactionId },
    });
  }

  update(transactionId: string, updateTransactionDto: UpdateTransactionDto) {
    const { bankAccountId, categoryId, date, name, type, value } =
      updateTransactionDto;
    return this.prismaService.transaction.update({
      where: { id: transactionId },
      data: { bankAccountId, categoryId, date, name, type, value },
    });
  }

  delete(transactionId: string) {
    return this.prismaService.transaction.delete({
      where: { id: transactionId },
    });
  }
}
