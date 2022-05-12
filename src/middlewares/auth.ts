import { NextFunction, Request, Response } from "express";

export class Auth {
  handle(request: Request, response: Response, next: NextFunction): Response {
    const { token } = request.body;

    if (token !== "connected") {
      return response.status(404).json({ message: "user not authorization" });
    }

    next();
  }
}
