import { Router } from "express";

const userRoutes = Router();

import { CreateUserController } from "../modules/user/controllers/CreateUserController";

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
