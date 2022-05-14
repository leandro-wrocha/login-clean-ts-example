import { Request, Response } from "express";
import { container } from "tsyringe";

import { IUserRequest } from "@/modules/user/dtos";
import { LoginUseCase } from "@/modules/login/useCases";

export class LoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IUserRequest = request.body;

    const authUseCase = container.resolve(LoginUseCase);

    const token = await authUseCase.execute(data);

    return response.status(200).json(token);
  }
}
