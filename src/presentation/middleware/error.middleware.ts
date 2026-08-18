import { Request, Response, NextFunction } from "express";
import { ConflictError } from "../../domain/errors/ConflictError.js";
import { NotFoundError } from "../../domain/errors/NotFoundError.js";
import { UnauthorizedError } from "../../domain/errors/UnauthorizedError.js";
import { HttpStatus } from "../../shared/constants/http-status.js";

export function errorMiddleware(error: unknown, _req: Request, res: Response, _next: NextFunction): void {
    if (error instanceof ConflictError) {
        res.status(HttpStatus.CONFLICT).json({ message: error.message });
        return;
    }
    if (error instanceof NotFoundError) {
        res.status(HttpStatus.NOT_FOUND).json({ message: error.message });
        return;
    }
    if (error instanceof UnauthorizedError) {
        res.status(HttpStatus.UNAUTHORIZED).json({ message: error.message });
        return;
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
}