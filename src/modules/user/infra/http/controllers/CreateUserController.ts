import { Request, Response } from "express";
import { container } from "tsyringe";

import { IUserRequest } from "@/modules/user/dtos";
import { CreateUserUseCase } from "@/modules/user/useCases/CreateUser/CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IUserRequest = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute(data);

    return response.status(201).send();
  }
}
