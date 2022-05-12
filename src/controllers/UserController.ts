import { Request, Response } from "express";
import { randomUUID } from "crypto";

import { User } from "../entities";
import { AppDataSource } from "../data-source";

interface UserDTO {
  username: String;
  password: String;
}

export class UserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: UserDTO = request.body;

    const user = Object.assign(
      {
        id: randomUUID(),
        ...data,
      },
      User
    );

    const userRepository = AppDataSource.getRepository(User);

    const userResponse = await userRepository.save(user);

    return response.status(200).json(userResponse);
  }
}
