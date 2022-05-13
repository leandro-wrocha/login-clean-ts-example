import { IUserDTO } from "../dtos";
import { User } from "../entities";

export interface IUserRepository {
  create: (data: IUserDTO) => Promise<void>;
  list: () => Promise<User[]>;
  findUserByUsername: (username: String) => Promise<User>;
}
