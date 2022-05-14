import { Router } from "express";

import { userRoutes } from "@/modules/user/infra/http/routes";
import { loginRoutes } from "@/modules/login/infra/http/routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/login", loginRoutes);

export { routes };
