import jwt, { SignOptions } from "jsonwebtoken";
import { TokenService, TokenPayload } from "../../application/interfaces/TokenService.js";
import { env } from "../../config/env.js";

export class JwtTokenService implements TokenService {
    generateAccessToken(payload: TokenPayload): string {
        const options: SignOptions = { expiresIn: env.accessTokenExpiresIn as SignOptions["expiresIn"] };
        return jwt.sign(payload, env.accessTokenSecret, options);
    }

    generateRefreshToken(payload: TokenPayload): string {
        const options: SignOptions = { expiresIn: env.refreshTokenExpiresIn as SignOptions["expiresIn"] };
        return jwt.sign(payload, env.refreshTokenSecret, options);
    }

    verifyAccessToken(token: string): TokenPayload {
        const decoded = jwt.verify(token, env.accessTokenSecret);
        return this.extractPayload(decoded);
    }

    verifyRefreshToken(token: string): TokenPayload {
        const decoded = jwt.verify(token, env.refreshTokenSecret);
        return this.extractPayload(decoded);
    }

    private extractPayload(decoded: string | jwt.JwtPayload): TokenPayload {
        if (typeof decoded !== "object" || decoded === null) {
            throw new Error("Invalid token payload");
        }
        if (typeof decoded.userId !== "string" || typeof decoded.role !== "string") {
            throw new Error("Invalid token payload");
        }
        return { userId: decoded.userId, role: decoded.role };
    }
}