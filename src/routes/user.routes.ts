import { Router } from "express";

import { CreateUserController } from "../modules/user/controllers/CreateUserController";
import { ListUsersController } from "../modules/user/controllers/ListUsersController";

import { Auth } from "../middlewares/auth";

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", Auth, listUsersController.handle);

export { userRoutes };
