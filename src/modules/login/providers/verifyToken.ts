import { JwtPayload, verify } from "jsonwebtoken";

import { AppError } from "@/shared/errors/AppError";

export function verifyToken(token: string): string | JwtPayload {
  const [, bearerToken] = token.split(" ");

  try {
    return verify(bearerToken, process.env.SECRET_KEY || "TestKey");
  } catch (err) {
    throw new AppError(401, "Token invalid");
  }
}
