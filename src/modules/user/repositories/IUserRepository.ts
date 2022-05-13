import { UserDTO } from "../dtos";
import { User } from "../entities";

export interface IUserRepository {
  create: (data: UserDTO) => Promise<void>;
  list: () => Promise<User[]>;
}
