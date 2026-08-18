import { NotFoundError } from "../../domain/errors/NotFoundError.js";
export class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUserById(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new NotFoundError("User not found");
        }
        return { id: user.id, name: user.name, email: user.email, role: user.role };
    }
}
//# sourceMappingURL=UserService.js.map