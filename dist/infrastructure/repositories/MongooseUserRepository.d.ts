import { User } from "../../domain/entities/User.js";
import { CreateUserData, UserRepository } from "../../domain/repositories/UserRepository.js";
export declare class MongooseUserRepository implements UserRepository {
    private mapToEntity;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    findByIdWithPassword(id: string): Promise<User | null>;
    create(data: CreateUserData): Promise<User>;
}
