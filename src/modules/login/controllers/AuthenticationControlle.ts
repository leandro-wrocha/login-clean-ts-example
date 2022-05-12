import { Request, Response } from "express";
import { UserRequest } from "../../user/dtos";
import { User } from "../../user/entities";

export class AuthenticationController {
  async handle(request: Request, response: Response): Promise<void> {
    const data: UserRequest = request.body;
  }
}
