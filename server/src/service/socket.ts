import generateController from "../controller/socket"
import { Server as socket_server } from "socket.io";

const initialiseSocket = (io: socket_server) => {
    //CustomerCare Namespace
    generateController().Chat_room(io);
};

export default initialiseSocket;