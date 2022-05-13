import { Router } from "express";

import { AuthController } from "@/modules/auth/Auth/AuthController";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/", authController.handle);

export { authRoutes };
