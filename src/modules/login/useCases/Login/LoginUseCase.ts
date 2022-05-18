import { inject, injectable } from "tsyringe";

import { AppError } from "@/shared/errors/AppError";
import { IUserDTO } from "@/modules/user/dtos";
import { IUserRepository } from "@/modules/user/repositories/IUserRepository";
import { generateToken } from "@/modules/login/providers/generateTokenProvider";

@injectable()
export class LoginUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ username, password }: IUserDTO): Promise<string> {
    const user = await this.userRepository.findUserByUsername(username);

    if (!user) {
      throw new AppError(404, "Username or password incorrect");
    }

    if (user.password !== password) {
      throw new AppError(401, "Username or password incorrect");
    }

    const token = generateToken(user);

    return token;
  }
}
