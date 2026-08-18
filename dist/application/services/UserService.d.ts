import { UserRepository } from "../../domain/repositories/UserRepository.js";
import { UserResponseDTO } from "../dto/user.dto.js";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUserById(userId: string): Promise<UserResponseDTO>;
}
