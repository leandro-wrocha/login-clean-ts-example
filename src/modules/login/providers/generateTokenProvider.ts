import { sign } from "jsonwebtoken";
import { User } from "@/modules/user/infra/typeorm/entities";

export function generateToken(user: User): string {
  const token = sign({ data: user }, process.env.SECRET_KEY || "TestKey", {
    expiresIn: "5m",
  });

  return token;
}
