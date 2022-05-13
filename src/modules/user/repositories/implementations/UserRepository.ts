import { randomUUID } from "crypto";
import { AppDataSource } from "../../../../data-source";
import { UserDTO } from "../../dtos";
import { User } from "../../entities";
import { IUserRepository } from "../IUserRepository";

import { Repository } from "typeorm";

export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async create(data: UserDTO): Promise<void> {
    const user = Object.assign(
      {
        id: randomUUID(),
        ...data,
      },
      User
    );

    await this.userRepository.save(user);
  }

  async list(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }
}
