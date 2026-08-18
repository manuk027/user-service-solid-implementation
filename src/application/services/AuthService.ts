import { RegisterDTO, LoginDTO, AuthResponseDTO, RefreshResponseDTO } from "../dto/auth.dto.js";
import { IUserRepository } from "../../domain/repositories/UserRepository.js";
import { PasswordHasher } from "../interfaces/PasswordHasher.js";
import { TokenService } from "../interfaces/TokenService.js";
import { ConflictError } from "../../domain/errors/ConflictError.js";
import { NotFoundError } from "../../domain/errors/NotFoundError.js";
import { UnauthorizedError } from "../../domain/errors/UnauthorizedError.js";
import { IAuthService } from "../interfaces/AuthService.js";

export class AuthService implements IAuthService {

    constructor(private readonly userRepository: IUserRepository, private readonly passwordHasher: PasswordHasher, private readonly tokenService: TokenService) { }

    async register(data: RegisterDTO): Promise<{ message: string }> {
        const email = data.email.trim().toLowerCase();
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new ConflictError("User already exists");
        }
        const hashedPassword = await this.passwordHasher.hash(data.password);
        await this.userRepository.create({ name: data.name.trim(), email, password: hashedPassword, role: "user" });
        return { message: "Registration successful" };
    }

    async login(data: LoginDTO): Promise<AuthResponseDTO> {
        const email = data.email.trim().toLowerCase();
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new NotFoundError("User not found");
        }
        const passwordValid = await this.passwordHasher.compare(user.password, data.password);
        if (!passwordValid) {
            throw new UnauthorizedError("Invalid credentials");
        }
        const payload = { userId: user.id, role: user.role };
        const accessToken = this.tokenService.generateAccessToken(payload);
        const refreshToken = this.tokenService.generateRefreshToken(payload);
        return { accessToken, refreshToken, userId: user.id, role: user.role };
    }

    async refreshAccessToken(refreshToken: string): Promise<RefreshResponseDTO> {
        let payload;
        try {
            payload = this.tokenService.verifyRefreshToken(refreshToken);
        } catch {
            throw new UnauthorizedError("Invalid or expired refresh token");
        }
        const accessToken = this.tokenService.generateAccessToken({ userId: payload.userId, role: payload.role });
        return { accessToken };
    }
}