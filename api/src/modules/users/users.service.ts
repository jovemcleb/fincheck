import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../shared/database/repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async getUserById(userId: string) {
    const user = await this.usersRepository.findById(userId);
    return { name: user.name, email: user.email };
  }
}
