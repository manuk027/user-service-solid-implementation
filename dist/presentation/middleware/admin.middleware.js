import { HttpStatus } from "../../shared/constants/http-status.js";
export function requireAdmin(req, res, next) {
    if (req.user?.role !== "admin") {
        res.status(HttpStatus.FORBIDDEN).json({ message: "Admin access required" });
        return;
    }
    next();
}
//# sourceMappingURL=admin.middleware.js.map