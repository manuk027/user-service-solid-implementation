import { Router } from "express";
import { requireAdmin } from "../middleware/admin.middleware.js";
export function createUserRouter(controller, authMiddleware) {
    const router = Router();
    router.get("/me", authMiddleware.authenticate, controller.getMe);
    router.get("/:id", authMiddleware.authenticate, requireAdmin, controller.getUserById);
    return router;
}
//# sourceMappingURL=user.routes.js.map