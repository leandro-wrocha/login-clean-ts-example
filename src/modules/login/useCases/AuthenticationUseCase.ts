import { inject, injectable } from "tsyringe";

import { UserDTO } from "../../user/dtos";
import { IUserRepository } from "../../user/repositories/IUserRepository";

@injectable()
export class AuthenticationUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ username, password }: UserDTO) {
    const user = this.userRepository.findUserByUsername(username);
  }
}
