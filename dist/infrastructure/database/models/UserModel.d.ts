import mongoose, { Document } from "mongoose";
import { UserRole } from "../../../domain/entities/User.js";
export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}
export declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, mongoose.DefaultSchemaOptions> & UserDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, UserDocument>;
