import { AuthController } from "./presentation/controllers/AuthController.js";
import { UserController } from "./presentation/controllers/UserController.js";
import { AuthMiddleware } from "./presentation/middleware/auth.middleware.js";
import { UserGrpcController } from "./infrastructure/grpc/UserGrpcController.js";
declare const authController: AuthController;
declare const userController: UserController;
declare const authMiddleware: AuthMiddleware;
declare const userGrpcController: UserGrpcController;
export { authController, userController, authMiddleware, userGrpcController };
