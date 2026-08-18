import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
import { AuthMiddleware } from "../middleware/auth.middleware.js";
import { requireAdmin } from "../middleware/admin.middleware.js";

export function createUserRouter(controller: UserController, authMiddleware: AuthMiddleware): Router {
    const router = Router();
    router.get("/me", authMiddleware.authenticate, controller.getMe);
    router.get("/:id", authMiddleware.authenticate, requireAdmin, controller.getUserById);
    return router;
}