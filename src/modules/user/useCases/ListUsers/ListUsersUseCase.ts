import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities";

import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();

    return users;
  }
}
