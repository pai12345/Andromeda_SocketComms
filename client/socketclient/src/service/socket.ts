import {io} from "socket.io-client";

const connection = () => {
    try {
        const socket = io("http://localhost:8000");
        socket.emit("posts", { actions: "create", post: "create" });
        socket.on("ack", data => {
            console.log(data);
          });
    } catch (error: any) {
        throw new Error(error);
    }
}

const generatesocket = () => {
    return {
        connection: connection,
    };
};

export default generatesocket;