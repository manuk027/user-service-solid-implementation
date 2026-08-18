import { UserModel } from "../database/models/UserModel.js";
export class MongooseUserRepository {
    mapToEntity(document) {
        return {
            id: document._id.toString(),
            name: document.name,
            email: document.email,
            password: document.password,
            role: document.role,
            createdAt: document.createdAt,
            updatedAt: document.updatedAt
        };
    }
    async findByEmail(email) {
        const user = await UserModel.findOne({
            email
        });
        if (!user) {
            return null;
        }
        return this.mapToEntity(user);
    }
    async findById(id) {
        const user = await UserModel
            .findById(id)
            .select("-password");
        if (!user) {
            return null;
        }
        return this.mapToEntity(user);
    }
    async findByIdWithPassword(id) {
        const user = await UserModel.findById(id);
        if (!user) {
            return null;
        }
        return this.mapToEntity(user);
    }
    async create(data) {
        const user = await UserModel.create(data);
        return this.mapToEntity(user);
    }
}
//# sourceMappingURL=MongooseUserRepository.js.map