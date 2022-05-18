import { Auth } from "@/middlewares/auth";
import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { UserAlreadyExists } from "../middlewares/UserAlreadyExists";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRoutes.post("/", UserAlreadyExists, createUserController.handle);
userRoutes.get("/", Auth, listUsersController.handle);

export { userRoutes };
