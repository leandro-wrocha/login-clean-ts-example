import { DataSource } from "typeorm";

import { User } from "@/modules/user/infra/typeorm/entities";

import { createUsers1652316103627 } from "@/shared/infra/typeorm/migrations";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/login-clean-ts-database.sql",
  logging: false,

  entities: [User],
  migrations: [createUsers1652316103627],
});
