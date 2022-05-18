import { FakeUserRepository } from "@/modules/user/repositories/fakes";
import { LoginUseCase } from "@/modules/login/useCases";
import { CreateUserUseCase } from "@/modules/user/useCases";
import { IUserRequest } from "@/modules/user/dtos";

import { verifyToken } from "@/modules/login/providers/verifyToken";

const fakeUserRepository = new FakeUserRepository();
const loginUseCase = new LoginUseCase(fakeUserRepository);
const createUserUseCase = new CreateUserUseCase(fakeUserRepository);

describe("LoginUseCase", () => {
  it("should be able an user authenticate", async () => {
    const user: IUserRequest = { username: "leandrow", password: "123" };

    await createUserUseCase.execute(user);

    const token = await loginUseCase.execute(user);

    const userAuthenticate = verifyToken(`Bearer ${token}`);

    expect(userAuthenticate).toBeTruthy();
  });

  it("should be not able an user authenticate not exists", async () => {
    const user: IUserRequest = { username: "leandr", password: "123" };

    try {
      await loginUseCase.execute(user);
    } catch (err) {
      expect(err.message).toBe("Username or password incorrect");
      expect(err.statusCode).toBe(404);
    }
  });

  it("should be not able an user authenticate with password incorrect", async () => {
    const user: IUserRequest = { username: "leandrow", password: "12" };

    try {
      await loginUseCase.execute(user);
    } catch (err) {
      expect(err.message).toBe("Username or password incorrect");
      expect(err.statusCode).toBe(401);
    }
  });
});
