import { FakeUserRepository } from "@/modules/user/repositories/fakes/FakeUserRepository";

import { LoginUseCase } from "./LoginUseCase";
import { IUserRequest } from "../../../../modules/user/dtos";
import { decode, verify } from "jsonwebtoken";
import { CreateUserUseCase } from "@/modules/user/useCases/CreateUser/CreateUserUseCase";
import { useContainer } from "typeorm";

const fakeUserRepository = new FakeUserRepository();
const loginUseCase = new LoginUseCase(fakeUserRepository);
const createUserUseCase = new CreateUserUseCase(fakeUserRepository);

describe("LoginUseCase", () => {
  it("shoud login an user", async () => {
    const user: IUserRequest = { username: "leandro", password: "123" };

    await createUserUseCase.execute(user);

    const token = await loginUseCase.execute(user);

    expect(token).toBeTruthy();
  });

  it("should not able login an user", () => {
    expect(async () => {
      const user: IUserRequest = { username: "leandro", password: "123" };

      await createUserUseCase.execute(user);

      const token = await loginUseCase.execute({
        username: user.username,
        password: "1",
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it("should not able login an user password incorrect", () => {
    expect(async () => {
      const user: IUserRequest = { username: "lean", password: "12" };

      const token = await loginUseCase.execute(user);
    }).rejects.toBeInstanceOf(Error);
  });
});
