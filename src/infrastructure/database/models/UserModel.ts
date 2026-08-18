import mongoose, { Document, Schema } from "mongoose";
import { UserRole } from "../../../domain/entities/User.js";

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema =
    new Schema<UserDocument>(
        {
            name: {
                type: String,
                required: true,
                trim: true
            },
            email: {
                type: String,
                required: true,
                unique: true,
                trim: true,
                lowercase: true
            },
            password: {
                type: String,
                required: true
            },
            role: {
                type: String,
                enum: ["user", "admin"],
                default: "user",
                required: true
            }
        },
        {
            timestamps: true
        }
    );

export const UserModel = mongoose.model<UserDocument>("User", userSchema);