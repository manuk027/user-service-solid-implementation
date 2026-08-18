import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";
// import { UserService } from "../../application/services/UserService.js";
import { IUserService } from "../../application/interfaces/UserService.js";
import { NotFoundError } from "../../domain/errors/NotFoundError.js";

interface GetMeRequest {
    userId: string;
}

interface UserResponse {
    userId: string;
    name: string;
    email: string;
    role: string;
}

export class UserGrpcController {

    constructor(private readonly userService: IUserService) { }
    
    getMe = async (call: ServerUnaryCall<GetMeRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> => {
        try {
            const { userId } = call.request;
            const user = await this.userService.getUserById(userId);
            callback(null, { userId: user.id, name: user.name, email: user.email, role: user.role });

        } catch (error) {
            if (error instanceof NotFoundError) {
                callback({ code: status.NOT_FOUND, message: error.message });
                return;
            }
            console.error("gRPC GetMe error:", error);
            callback({ code: status.INTERNAL, message: "Internal server error" });
        }
    };
}