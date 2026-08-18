import { Request, Response, NextFunction } from "express";
import { AuthService } from "../../application/services/AuthService.js";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    refresh: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
