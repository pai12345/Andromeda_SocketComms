import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import generateEnv from "../config/config";
import route_middleware from "../middleware/middleware";
import { generic_status } from "../utility/util";
import { Server as Server_type } from "http";
import { Server as socket_server } from "socket.io";
import { createServer } from "http";
// import generateController from "../controller/socket";

/**
 * Class - Server
 * @description
 * Class having implementation details for Express server
 */

class Server {
    private add_configuration() {
        const app = express();
        const cors_option = { origin: "*" };
        app.use(json({ limit: "1GB" }));
        app.use(cors(cors_option));
        app.use(helmet());
        app.use(compression());
        app.use(route_middleware);
        return app;
    }
    initialise_server() {
        const PORT = generateEnv().PORT;
        const app = this.add_configuration();
        const httpServer = createServer(app);

        //Server Listener
        const initialse = httpServer.listen(PORT, () => {
            console.log(`Listening on Port: ${PORT}`);
        })
            .on(generic_status.Error, (err: any) => {
                console.log(`${generic_status.ErrorAppStartup}: ${err}`);
            });
        return initialse;
    }
    initialise_socket(app: Server_type) {
        const cors_option = { origin: "*" };
        const io = new socket_server(app, { cors: cors_option });
        io.on("connection", (socket_instance) => {
            // generateController().Chat_room(socket_instance);
            console.log(`Socket Client connected`);
            socket_instance.on("posts", (data: any) => {
                console.log(data);
                socket_instance.emit("ack", { actions: "success", post: "success" });
            });
        });
        io.engine.on("connection_error", (err: any) => {
            console.log({
                req: err.req,
                code: err.code,
                message: err.message,
                context: err.context
            });
            // return {
            //     req: err.req,
            //     code: err.code,
            //     message: err.message,
            //     context: err.context
            // }
        });
    }
}

/**
 * Instance - Server
 * @description
 * Instance of Server Class
 */
const server = new Server();
export default server;