import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "../../config/env.js";
import { UserGrpcController } from "./UserGrpcController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROTO_PATH = path.join(__dirname, "../../../proto/user.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as {
    user: {
        UserService: {
            service: grpc.ServiceDefinition;
        };
    };
};

export function startGrpcServer(controller: UserGrpcController): void {
    const server = new grpc.Server();
    server.addService(protoDescriptor.user.UserService.service, { GetMe: controller.getMe });
    server.bindAsync(`0.0.0.0:${env.grpcPort}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
        if (error) {
            console.error("gRPC server failed:", error);
            return;
        }
        console.log(`gRPC User Service running on port ${port}`);
        server.start();
    });
}