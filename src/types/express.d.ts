import { TokenPayload } from "../application/interfaces/ITokenService.js";

declare global {
    namespace Express {
        interface Request {
            user?: TokenPayload;
        }
    }
}

export { };