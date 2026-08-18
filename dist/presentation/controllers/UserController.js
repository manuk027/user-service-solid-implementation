import { HttpStatus } from "../../shared/constants/http-status.js";
export class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    getMe = async (req, res, next) => {
        try {
            if (!req.user) {
                res.status(HttpStatus.UNAUTHORIZED).json({ message: "Authentication required" });
                return;
            }
            const user = await this.userService.getUserById(req.user.userId);
            res.status(HttpStatus.OK).json(user);
        }
        catch (error) {
            next(error);
        }
    };
    getUserById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id);
            res.status(HttpStatus.OK).json(user);
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=UserController.js.map