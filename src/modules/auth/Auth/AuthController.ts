import { Request, Response } from "express";
import { container } from "tsyringe";

import { IUserRequest } from "../../user/dtos";
import { AuthUseCase } from "./AuthUseCase";

export class AuthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IUserRequest = request.body;

    const authUseCase = container.resolve(AuthUseCase);

    const token = await authUseCase.execute(data);

    return response.status(200).json(token);
  }
}
