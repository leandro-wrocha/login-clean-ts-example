import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export function Auth(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  const [, token] = authorization.split(" ");

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return response.status(401).json({ message: "token expired" });
  }

  next();
}
