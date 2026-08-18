import { UserRole } from "../../domain/entities/User.js";

export interface UserResponseDTO {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}