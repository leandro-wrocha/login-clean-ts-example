import { inject, injectable } from "tsyringe";
import jwt from "jsonwebtoken";

import { IUserDTO } from "@/modules/user/dtos";
import { IUserRepository } from "@/modules/user/repositories/IUserRepository";

@injectable()
export class LoginUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ username, password }: IUserDTO): Promise<String> {
    const user = await this.userRepository.findUserByUsername(username);

    if (!user.password || user.password !== password) {
      throw new Error("Username and Password incorrect");
    }

    const token = jwt.sign(
      { data: user },
      process.env.SECRET_KEY || "testKey",
      {
        expiresIn: "30s",
      }
    );

    return token;
  }
}
