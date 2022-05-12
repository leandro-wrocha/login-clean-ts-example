import { Request, Response } from "express";

import { User } from "../entities";
import { AppDataSource } from "../data-source";

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const usersRepository = AppDataSource.getRepository(User);
    const users = await usersRepository.find();

    return response.status(200).json(users);
  }
}
