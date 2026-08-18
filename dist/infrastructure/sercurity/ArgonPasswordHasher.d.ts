import { PasswordHasher } from "../../application/interfaces/PasswordHasher.js";
export declare class Argon2PasswordHasher implements PasswordHasher {
    hash(password: string): Promise<string>;
    compare(hashedPassword: string, plainPassword: string): Promise<boolean>;
}
