import { IUserDTO } from "../dtos";
import { User } from "../infra/typeorm/entities";

export interface IUserRepository {
  create: (data: IUserDTO) => Promise<void>;
  list: () => Promise<User[]>;
  findUserByUsername: (username: String) => Promise<User>;
}
