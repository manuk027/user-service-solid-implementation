import app from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./infrastructure/database/mongoose.config.js";
import { startGrpcServer } from "./infrastructure/grpc/grpc.server.js";

import { userGrpcController } from "./container.js";

async function startServer(): Promise<void> {
    try {
        await connectDatabase();
        app.listen(env.port, () => {
            console.log(`HTTP server running on port ${env.port}`);
        });
        startGrpcServer(userGrpcController);
    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
}
startServer();