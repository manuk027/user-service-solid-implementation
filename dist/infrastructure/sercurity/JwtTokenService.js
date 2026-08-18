import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
export class JwtTokenService {
    generateAccessToken(payload) {
        const options = { expiresIn: env.accessTokenExpiresIn };
        return jwt.sign(payload, env.accessTokenSecret, options);
    }
    generateRefreshToken(payload) {
        const options = { expiresIn: env.refreshTokenExpiresIn };
        return jwt.sign(payload, env.refreshTokenSecret, options);
    }
    verifyAccessToken(token) {
        const decoded = jwt.verify(token, env.accessTokenSecret);
        return this.extractPayload(decoded);
    }
    verifyRefreshToken(token) {
        const decoded = jwt.verify(token, env.refreshTokenSecret);
        return this.extractPayload(decoded);
    }
    extractPayload(decoded) {
        if (typeof decoded !== "object" || decoded === null) {
            throw new Error("Invalid token payload");
        }
        if (typeof decoded.userId !== "string" || typeof decoded.role !== "string") {
            throw new Error("Invalid token payload");
        }
        return { userId: decoded.userId, role: decoded.role };
    }
}
//# sourceMappingURL=JwtTokenService.js.map