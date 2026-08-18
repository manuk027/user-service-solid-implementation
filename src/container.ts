import { MongooseUserRepository } from "./infrastructure/repositories/MongooseUserRepository.js";
import { Argon2PasswordHasher } from "./infrastructure/sercurity/ArgonPasswordHasher.js";
import { JwtTokenService } from "./infrastructure/sercurity/JwtTokenService.js";
import { AuthService } from "./application/services/AuthService.js";
import { UserService } from "./application/services/UserService.js";
import { AuthController } from "./presentation/controllers/AuthController.js";
import { UserController } from "./presentation/controllers/UserController.js";
import { AuthMiddleware } from "./presentation/middleware/auth.middleware.js";
import { UserGrpcController } from "./infrastructure/grpc/UserGrpcController.js";

const userRepository = new MongooseUserRepository();
const passwordHasher = new Argon2PasswordHasher();
const tokenService = new JwtTokenService();
const authService = new AuthService(userRepository, passwordHasher, tokenService);
const userService = new UserService(userRepository);
const authController = new AuthController(authService);
const userController = new UserController(userService);
const authMiddleware = new AuthMiddleware(tokenService);
const userGrpcController = new UserGrpcController(userService);

export { authController, userController, authMiddleware, userGrpcController };