import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { UserService } from "../../application/services/UserService.js";
interface GetMeRequest {
    userId: string;
}
interface UserResponse {
    userId: string;
    name: string;
    email: string;
    role: string;
}
export declare class UserGrpcController {
    private readonly userService;
    constructor(userService: UserService);
    getMe: (call: ServerUnaryCall<GetMeRequest, UserResponse>, callback: sendUnaryData<UserResponse>) => Promise<void>;
}
export {};
