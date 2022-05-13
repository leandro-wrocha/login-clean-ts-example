import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "@/modules/user/entities";

import { createUsers1652316103627 } from "@/database/migrations";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/login-clean-ts-database.sql",
  logging: true,

  entities: [User],
  migrations: [createUsers1652316103627],
});
