import { randomUUID } from "crypto";

import { User } from "@/modules/user/infra/typeorm/entities";
import { IUserDTO } from "@/modules/user/dtos";
import { IUserRepository } from "@/modules/user/repositories/IUserRepository";

export class FakeUserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create({ username, password }: IUserDTO): Promise<void> {
    const user = new User();
    user.username = username;
    user.password = password;

    this.users.push(user);
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async findUserByUsername(username: String): Promise<User> {
    const user = this.users.find((user) => user.username === username);

    return user;
  }
}
