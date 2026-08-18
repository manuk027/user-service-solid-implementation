import { ConflictError } from "../../domain/errors/ConflictError.js";
import { NotFoundError } from "../../domain/errors/NotFoundError.js";
import { UnauthorizedError } from "../../domain/errors/UnauthorizedError.js";
import { HttpStatus } from "../../shared/constants/http-status.js";
export function errorMiddleware(error, _req, res, _next) {
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
//# sourceMappingURL=error.middleware.js.map