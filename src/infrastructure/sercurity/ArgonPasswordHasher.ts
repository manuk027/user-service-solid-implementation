import argon2 from "argon2";
import { PasswordHasher } from "../../application/interfaces/PasswordHasher.js";

export class Argon2PasswordHasher implements PasswordHasher {
    async hash(password: string): Promise<string> {
        return argon2.hash(password);
    }

    async compare(hashedPassword: string, plainPassword: string): Promise<boolean> {
        return argon2.verify(hashedPassword, plainPassword);
    }
}