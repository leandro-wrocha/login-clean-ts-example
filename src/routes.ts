import { Router } from "express";

const routes = Router();

import { UserController } from "./controllers/UserController";
import { AuthenticationController } from "./controllers/AuthenticationController";
import { ListUsersController } from "./controllers/ListUsersController";
import { Auth } from "./middlewares/auth";

const userController = new UserController();
const authenticationController = new AuthenticationController();
const listUsersController = new ListUsersController();
const auth = new Auth();

routes.post("/users", userController.handle);

routes.get("/users", auth.handle, listUsersController.handle);

routes.post("/login", authenticationController.handle);

export default routes;
