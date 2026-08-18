import { RegisterDTO, LoginDTO, AuthResponseDTO, RefreshResponseDTO } from "../dto/auth.dto.js";

export interface IAuthService {
    register(data: RegisterDTO): Promise<{ message: string }>;
    login(data: LoginDTO): Promise<AuthResponseDTO>;
    refreshAccessToken(refreshToken: string): Promise<RefreshResponseDTO>;
}