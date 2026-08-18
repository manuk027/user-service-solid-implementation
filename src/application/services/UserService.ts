import { IUserRepository } from "../../domain/repositories/UserRepository.js";
import { NotFoundError } from "../../domain/errors/NotFoundError.js";
import { UserResponseDTO } from "../dto/user.dto.js";
import { IUserService } from "../interfaces/UserService.js";

export class UserService implements IUserService {

    constructor(private readonly userRepository: IUserRepository) { }

    async getUserById(userId: string): Promise<UserResponseDTO> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new NotFoundError("User not found");
        }
        return { id: user.id, name: user.name, email: user.email, role: user.role };
    }
}