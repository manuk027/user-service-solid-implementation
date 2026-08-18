import { UserResponseDTO } from "../dto/user.dto.js";

export interface IUserService {
    getUserById(userId: string): Promise<UserResponseDTO>;
}

