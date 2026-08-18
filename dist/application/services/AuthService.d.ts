import { RegisterDTO, LoginDTO, AuthResponseDTO, RefreshResponseDTO } from "../dto/auth.dto.js";
import { UserRepository } from "../../domain/repositories/UserRepository.js";
import { PasswordHasher } from "../interfaces/PasswordHasher.js";
import { TokenService } from "../interfaces/TokenService.js";
export declare class AuthService {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly tokenService;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasher, tokenService: TokenService);
    register(data: RegisterDTO): Promise<{
        message: string;
    }>;
    login(data: LoginDTO): Promise<AuthResponseDTO>;
    refreshAccessToken(refreshToken: string): Promise<RefreshResponseDTO>;
}
