import { Request, Response, NextFunction } from "express";
import { TokenService } from "../../application/interfaces/TokenService.js";
export declare class AuthMiddleware {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    authenticate: (req: Request, res: Response, next: NextFunction) => void;
}
