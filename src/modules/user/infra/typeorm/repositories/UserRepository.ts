import { Repository } from "typeorm";

import { AppDataSource } from "@/shared/infra/typeorm/data-source";

import { User } from "@/modules/user/infra/typeorm/entities";
import { IUserDTO } from "@/modules/user/dtos";
import { IUserRepository } from "@/modules/user/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async create({ username, password }: IUserDTO): Promise<void> {
    const user = new User();
    user.username = username;
    user.password = password;

    await this.userRepository.save(user);
  }

  async list(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async findUserByUsername(username: String): Promise<User> {
    const user = await this.userRepository.findOneBy({ username });

    return user;
  }
}
