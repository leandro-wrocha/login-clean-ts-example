import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export class Auth {
  handle(request: Request, response: Response, next: NextFunction): Response {
    const { authorization } = request.headers;

    const [, token] = authorization.split(" ");

    try {
      const user = jwt.verify(token, "keybind");

      request.user = user.data;
    } catch (err) {
      return response.status(401).json({ message: "token expired" });
    }

    next();
  }
}
