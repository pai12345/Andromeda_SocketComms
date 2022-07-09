import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import generatesocket from "../service/sockets/socket";
import generateEnv from "../config/config";
import route_middleware from "../middleware/middleware";
import { generic_status } from "../utility/util";

/**
 * Class - Server
 * @description
 * Class having implementation details for Express server
 */

class Server{
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
        //Server Listener
        const initialse = app.listen(PORT, () => {
            console.log(`Listening on Port: ${PORT}`);
        })
        .on(generic_status.Error, (err: any) => {
            console.log(`${generic_status.ErrorAppStartup}: ${err}`);
        });
        return initialse;
    }
    initialise_socket(app:any){
        const io = generatesocket().init(app);
        io.on("connection", (socketIn:any) => {
            console.log(`Client connected`);
            socketIn.on("posts", data => {
              console.log(data);
              socketIn.emit("ack", { actions: "success", post: "success" });
            });
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