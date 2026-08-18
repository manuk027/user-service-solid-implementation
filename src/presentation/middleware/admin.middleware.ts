import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../shared/constants/http-status.js";

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
    if (req.user?.role !== "admin") {
        res.status(HttpStatus.FORBIDDEN).json({ message: "Admin access required" });
        return;
    }
    next();
}