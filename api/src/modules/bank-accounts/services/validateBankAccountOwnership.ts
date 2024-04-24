import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepository } from 'src/shared/database/repositories/bank-accounts.repository';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepository: BankAccountRepository) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountRepository.findFirst(
      userId,
      bankAccountId,
    );

    if (!isOwner) {
      throw new NotFoundException('Bank account not found');
    }
  }
}
