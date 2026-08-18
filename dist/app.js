import express from "express";
import { authController, userController, authMiddleware } from "./container.js";
import { createAuthRouter } from "./presentation/routes/auth.routes.js";
import { createUserRouter } from "./presentation/routes/user.routes.js";
import { errorMiddleware } from "./presentation/middleware/error.middleware.js";
const app = express();
app.use(express.json());
app.use("/auth", createAuthRouter(authController));
app.use("/users", createUserRouter(userController, authMiddleware));
app.get("/test", (_req, res) => { res.json({ message: "Server is running." }); });
app.use(errorMiddleware);
export default app;
//# sourceMappingURL=app.js.map