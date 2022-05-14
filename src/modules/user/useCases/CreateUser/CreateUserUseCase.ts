import { inject, injectable } from "tsyringe";

import { IUserDTO } from "../../dtos";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(data: IUserDTO): Promise<void> {
    await this.userRepository.create(data);
  }
}
