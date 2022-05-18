import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@/shared/errors/AppError";
import { IUserAlreadyExistsRequest } from "@/modules/user/dtos";
import { UserRepository } from "@/modules/user/infra/typeorm/repositories";

export async function UserAlreadyExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { username }: IUserAlreadyExistsRequest = request.body;

  const userRepository = container.resolve(UserRepository);

  const userAlreadyExists = await userRepository.findUserByUsername(username);

  if (userAlreadyExists) {
    throw new AppError(401, "User already Exists");
  }

  next();
}
