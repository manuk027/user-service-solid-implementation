import { Request, Response, NextFunction } from "express";
import { UserService } from "../../application/services/UserService.js";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMe: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
