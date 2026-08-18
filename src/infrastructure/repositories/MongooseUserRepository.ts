import { User } from "../../domain/entities/User.js";
import { CreateUserData, IUserRepository } from "../../domain/repositories/UserRepository.js";
import { UserDocument, UserModel } from "../database/models/UserModel.js";

export class MongooseUserRepository implements IUserRepository {

    private mapToEntity(document: UserDocument): User {
        return { id: document._id.toString(), name: document.name, email: document.email, password: document.password, role: document.role, createdAt: document.createdAt, updatedAt: document.updatedAt };
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return null;
        }
        return this.mapToEntity(user);
    }

    async findById(id: string): Promise<User | null> {
        const user = await UserModel.findById(id).select("-password");
        if (!user) {
            return null;
        }
        return this.mapToEntity(user);
    }

    async findByIdWithPassword(id: string): Promise<User | null> {
        const user = await UserModel.findById(id);
        if (!user) {
            return null;
        }
        return this.mapToEntity(user);
    }

    async create(data: CreateUserData): Promise<User> {
        const user = await UserModel.create(data);
        return this.mapToEntity(user);
    }
}