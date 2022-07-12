import { io } from "socket.io-client";

const connection = () => {
    try {
        const socket = io("http://localhost:8000/Chat");
        socket.emit("posts", { actions: "create", post: "create" });
        socket.on("ack", data => {
            console.log(data);
        });
        socket.on("connect_error", () => {
            setTimeout(() => {
                console.log("Chat Socket Connection Error")
            }, 1000);
        });
        socket.on("disconnect", (reason) => {
            console.log(`Chat Socket Disconnected -> ${reason}`)
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