import { Request, Response, NextFunction } from "express";
import { UserService } from "../../application/services/UserService.js";
import { HttpStatus } from "../../shared/constants/http-status.js";
import { IUserService } from "../../application/interfaces/UserService.js";

export class UserController {

    constructor(private readonly userService: IUserService) { }

    getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            if (!req.user) {
                res.status(HttpStatus.UNAUTHORIZED).json({ message: "Authentication required" });
                return;
            }
            const user = await this.userService.getUserById(req.user.userId);
            res.status(HttpStatus.OK).json(user);
        } catch (error) {
            next(error);
        }
    };

    getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id } = req.params as { id: string };
            const user = await this.userService.getUserById(id);
            res.status(HttpStatus.OK).json(user);
        } catch (error) {
            next(error);
        }
    };
}