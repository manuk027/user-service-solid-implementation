import { User, UserRole } from "../entities/User.js";

export interface CreateUserData {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    findByIdWithPassword(id: string): Promise<User | null>;
    create(data: CreateUserData): Promise<User>;
}