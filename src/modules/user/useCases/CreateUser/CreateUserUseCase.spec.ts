import { FakeUserRepository } from "@/modules/user/repositories/fakes";
import { CreateUserUseCase } from "@/modules/user/useCases/";
import { AppError } from "@/shared/errors/AppError";
import { IUserRequest } from "../../dtos";

const fakeUserRepository = new FakeUserRepository();
const createUserUseCase = new CreateUserUseCase(fakeUserRepository);

describe("CreateUserUseCase", () => {
  it("should be able create an user", async () => {
    const user: IUserRequest = { username: "leandro", password: "123" };

    await createUserUseCase.execute(user);

    const userCreate = await fakeUserRepository.findUserByUsername(
      user.username
    );

    expect(userCreate).toHaveProperty("id");
    expect(userCreate.username).toEqual(user.username);
  });

  it("should be not able create an user exists", async () => {
    const user: IUserRequest = { username: "leandro", password: "123" };

    try {
      await createUserUseCase.execute(user);
    } catch (err) {
      expect(err.message).toBe("User already exists");
      expect(err.statusCode).toBe(401);
    }
  });
});
