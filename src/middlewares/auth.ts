import { NextFunction, Request, Response } from "express";

import { verifyToken } from "@/modules/login/providers/verifyTokenProvider";

export function Auth(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  try {
    verifyToken(authorization);
  } catch (err) {
    return response.status(404).json({ message: "Token expired" });
  }

  next();
}
