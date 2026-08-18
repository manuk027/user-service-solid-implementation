import { Router } from "express";
export function createAuthRouter(controller) {
    const router = Router();
    router.post("/register", controller.register);
    router.post("/login", controller.login);
    router.post("/refresh", controller.refresh);
    return router;
}
//# sourceMappingURL=auth.routes.js.map