import { FakeUserRepository } from "@/modules/user/repositories/fakes";
import { LoginUseCase } from "@/modules/login/useCases";
import { ListUsersUseCase } from "@/modules/user/useCases";
import { IUserDTO, IUserRequest } from "../../dtos";

import { verifyToken } from "@/modules/login/providers/verifyToken";

const fakeUserRepository = new FakeUserRepository();
const loginUseCase = new LoginUseCase(fakeUserRepository);
const listUsersUseCase = new ListUsersUseCase(fakeUserRepository);

describe("ListUsersUseCase", () => {
  beforeAll(async () => {
    const user: IUserDTO = {
      username: "leandrow",
      password: "123",
    };

    await fakeUserRepository.create(user);
  });

  it("should be able list an array of user, to user authenticate", async () => {
    const user: IUserRequest = { username: "leandrow", password: "123" };

    const token = await loginUseCase.execute(user);

    const userAuthenticate = verifyToken(`Bearer ${token}`);

    expect(userAuthenticate).toBeTruthy();
    expect(await listUsersUseCase.execute()).toEqual(
      expect.arrayContaining([expect.objectContaining(user)])
    );
  });

  it("should be not able list an array of user, if token invalid", async () => {
    const user: IUserRequest = { username: "leandrow", password: "123" };

    const token = await loginUseCase.execute(user);

    try {
      const userAuthenticate = verifyToken("moasfoksodkasods");
    } catch (err) {
      expect(err.message).toBe("Token invalid");
      expect(err.statusCode).toBe(401);
    }
  });
});
