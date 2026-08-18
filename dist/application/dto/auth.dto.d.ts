export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface AuthResponseDTO {
    accessToken: string;
    refreshToken: string;
    userId: string;
    role: string;
}
export interface RefreshResponseDTO {
    accessToken: string;
}
