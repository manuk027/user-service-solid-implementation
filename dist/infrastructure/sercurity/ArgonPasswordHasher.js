import argon2 from "argon2";
export class Argon2PasswordHasher {
    async hash(password) {
        return argon2.hash(password);
    }
    async compare(hashedPassword, plainPassword) {
        return argon2.verify(hashedPassword, plainPassword);
    }
}
//# sourceMappingURL=ArgonPasswordHasher.js.map