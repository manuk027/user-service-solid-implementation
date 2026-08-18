import dotenv from "dotenv";
dotenv.config();

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

function getNumberEnv(name: string, defaultValue: number): number {
    const value = process.env[name];
    if (!value) {
        return defaultValue;
    }
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
        throw new Error(`Environment variable ${name} must be a valid number`);
    }
    return parsed;
}

export const env = {
    port: getNumberEnv("PORT", 3001),
    mongoUri: getRequiredEnv("MONGO_URI"),
    accessTokenSecret: getRequiredEnv("ACCESS_TOKEN_SECRET"),
    refreshTokenSecret: getRequiredEnv("REFRESH_TOKEN_SECRET"),
    accessTokenExpiresIn: getRequiredEnv("ACCESS_TOKEN_EXPIRES_IN"),
    refreshTokenExpiresIn: getRequiredEnv("REFRESH_TOKEN_EXPIRES_IN"),
    grpcPort: getNumberEnv("GRPC_PORT", 50051)
};