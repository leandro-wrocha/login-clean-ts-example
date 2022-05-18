import "module-alias/register";
import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";

import "@/shared/infra/typeorm";
import "@/shared/container";

import { routes } from "@/shared/infra/http/routes";
import { AppError } from "@/shared/errors/AppError";

const server = express();

server.use(express.json());
server.use(routes);

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { server };
