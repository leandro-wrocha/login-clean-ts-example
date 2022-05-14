// import { randomUUID } from "crypto";
// import { IUserDTO } from "../../dtos";
// import { User } from "../../entities";
// import { IUserRepository } from "../../repositories/IUserRepository";

// class UserRepository implements IUserRepository {
//   async create(data: IUserDTO): Promise<void> {}

//   list: () => Promise<User[]>;
//   findUserByUsername: (username: String) => Promise<User>;
// }

// describe("CreateUserUseCase", () => {
//   it("should create an user", () => {
//     const user = Object.assign(
//       { id: randomUUID(), username: "leandro", password: "123" },
//       User
//     );

//     expect(user).toHaveProperty("password");
//   });
// });
