import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-accounts.repository';
import { ValidateBankAccountOwnershipService } from './validateBankAccountOwnership';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountRepository: BankAccountRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
  ) {}
  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountRepository.create(userId, createBankAccountDto);
  }

  findAllByUserId(userId: string) {
    return this.bankAccountRepository.findManyByUserId(userId);
  }

  findOne(id: number) {
    return `This action returns a #${id} bankAccount`;
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    await this.validateBankAccountOwnershipService.validate(
      userId,
      bankAccountId,
    );

    return this.bankAccountRepository.update(
      bankAccountId,
      updateBankAccountDto,
    );
  }

  async remove(bankAccountId: string, userId: string) {
    await this.validateBankAccountOwnershipService.validate(
      userId,
      bankAccountId,
    );

    await this.bankAccountRepository.delete(bankAccountId);

    return null;
  }
}
