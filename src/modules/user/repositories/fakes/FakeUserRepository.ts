import { randomUUID } from "crypto";

import { User } from "../../entities";
import { IUserDTO } from "../../dtos";
import { IUserRepository } from "../IUserRepository";

export class FakeUserRepository implements IUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create(data: IUserDTO) {
    const user = Object.assign(
      {
        id: randomUUID(),
        ...data,
      },
      User
    );

    this.users.push(user);

    return;
  }
  async list(): Promise<User[]> {
    return this.users;
  }

  async findUserByUsername(username: String): Promise<User> {
    const user = this.users.find((user) => user.username === username);

    return user;
  }
}
