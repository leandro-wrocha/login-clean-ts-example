import { Request, Response } from "express";

import { User } from "../entities";
import { AppDataSource } from "../data-source";

export class AuthenticationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { username } });

    if (!user || user.password !== password) {
      return response
        .status(401)
        .json({ message: "Username or password incorrect" });
    }

    return response.status(200).json(user);
  }
}
