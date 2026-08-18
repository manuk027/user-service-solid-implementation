import { Request, Response, NextFunction } from "express";
// import { AuthService } from "../../application/services/AuthService.js";
import { HttpStatus } from "../../shared/constants/http-status.js";
import { IAuthService } from "../../application/interfaces/AuthService.js";

export class AuthController {

    constructor(private readonly authService: IAuthService) { }

    register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { name, email, password } = req.body;
            if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "Name, email and password are required" });
                return;
            }
            const result = await this.authService.register({ name, email, password });
            res.status(HttpStatus.CREATED).json(result);
        } catch (error) {
            next(error);
        }
    };

    login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { email, password } = req.body;
            if (typeof email !== "string" || typeof password !== "string") {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "Email and password are required" });
                return;
            }
            const result = await this.authService.login({ email, password });
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            next(error);
        }
    };

    refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { refreshToken } = req.body;
            if (typeof refreshToken !== "string" || refreshToken.length === 0) {
                res.status(HttpStatus.BAD_REQUEST).json({ message: "Refresh token is required" });
                return;
            }
            const result = await this.authService.refreshAccessToken(refreshToken);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            next(error);
        }
    };
}



/// abstraction should be implemented everywhere