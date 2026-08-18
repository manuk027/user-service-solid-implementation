import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";
export declare function createUserRouter(controller: UserController, authMiddleware: AuthMiddleware): Router;
