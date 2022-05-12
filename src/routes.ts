import { Router } from "express";

const routes = Router();

import { UserController } from "./controllers/UserController";

const userController = new UserController();

routes.post("/users", userController.handle);

export default routes;