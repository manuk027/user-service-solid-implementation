import { TokenService, TokenPayload } from "../../application/interfaces/TokenService.js";
export declare class JwtTokenService implements TokenService {
    generateAccessToken(payload: TokenPayload): string;
    generateRefreshToken(payload: TokenPayload): string;
    verifyAccessToken(token: string): TokenPayload;
    verifyRefreshToken(token: string): TokenPayload;
    private extractPayload;
}
