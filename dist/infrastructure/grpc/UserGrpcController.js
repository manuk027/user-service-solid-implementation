import { status } from "@grpc/grpc-js";
import { NotFoundError } from "../../domain/errors/NotFoundError.js";
export class UserGrpcController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    getMe = async (call, callback) => {
        try {
            const { userId } = call.request;
            const user = await this.userService.getUserById(userId);
            callback(null, { userId: user.id, name: user.name, email: user.email, role: user.role });
        }
        catch (error) {
            if (error instanceof NotFoundError) {
                callback({ code: status.NOT_FOUND, message: error.message });
                return;
            }
            console.error("gRPC GetMe error:", error);
            callback({ code: status.INTERNAL, message: "Internal server error" });
        }
    };
}
//# sourceMappingURL=UserGrpcController.js.map