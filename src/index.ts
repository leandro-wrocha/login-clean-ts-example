import "module-alias/register";
import "reflect-metadata";
import "dotenv/config";

import express from "express";

import "@/shared/infra/typeorm";

import "@/shared/container";

import { routes } from "@/shared/infra/http/routes";

const server = express();

server.use(express.json());
server.use(routes);

server.listen(process.env.PORT, () =>
  console.log(`Server is running port: ${process.env.PORT}`)
);
