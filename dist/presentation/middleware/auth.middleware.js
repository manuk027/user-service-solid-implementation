import { HttpStatus } from "../../shared/constants/http-status.js";
export class AuthMiddleware {
    tokenService;
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    authenticate = (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                res.status(HttpStatus.UNAUTHORIZED).json({ message: "Authentication required" });
                return;
            }
            const token = authHeader.substring(7);
            const payload = this.tokenService.verifyAccessToken(token);
            req.user = payload;
            next();
        }
        catch (error) {
            console.error(error instanceof Error ? error.message : error);
            res.status(HttpStatus.UNAUTHORIZED).json({ message: "Invalid or expired access token" });
        }
    };
}
//# sourceMappingURL=auth.middleware.js.map