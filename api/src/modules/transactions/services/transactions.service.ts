import { Injectable } from '@nestjs/common';
import { TransactionRepository } from 'src/shared/database/repositories/transaction.repository';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { ValidateBankAccountOwnershipService } from '../../bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnershipService } from '../../categories/services/validate-category-ownership.service';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { ValidateTransactionOwnershipService } from './validate-transaction-ownership.service';
import { TransactionType } from '../entities/transaction';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
    private readonly validateTransactionOwnershipService: ValidateTransactionOwnershipService,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId } = createTransactionDto;

    await this.validateEntitiesOwnership({ bankAccountId, userId, categoryId });

    return this.transactionRepository.create(userId, createTransactionDto);
  }

  findAllByUserId(
    userId: string,
    filters: {
      month: number;
      year: number;
      bankAccountId?: string;
      transactionType?: TransactionType;
    },
  ) {
    return this.transactionRepository.findManyByUserId(userId, filters);
  }

  async update(
    userId: string,
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const { bankAccountId, categoryId } = updateTransactionDto;
    await this.validateEntitiesOwnership({
      userId,
      bankAccountId,
      categoryId,
      transactionId,
    });

    return this.transactionRepository.update(
      transactionId,
      updateTransactionDto,
    );
  }

  async remove(userId: string, bankAccountId: string) {
    await this.validateTransactionOwnershipService.validate(
      userId,
      bankAccountId,
    );

    await this.transactionRepository.delete(bankAccountId);
  }

  private async validateEntitiesOwnership({
    bankAccountId,
    categoryId,
    userId,
    transactionId,
  }: {
    userId: string;
    bankAccountId: string;
    categoryId: string;
    transactionId?: string;
  }) {
    await Promise.all([
      transactionId &&
        this.validateTransactionOwnershipService.validate(
          userId,
          transactionId,
        ),
      this.validateBankAccountOwnershipService.validate(userId, bankAccountId),
      this.validateCategoryOwnershipService.validate(userId, categoryId),
    ]);
  }
}
