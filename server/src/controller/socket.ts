import { Server as socket_server } from "socket.io";

// Chat namespace
const Chat_room = (io: socket_server) => {
    const nsChat = io.of("/Chat");
    nsChat.on("connection", (socket_instance) => {
        console.log(`Chat Client connected`);
        const roomid = (Math.random() + 1).toString(36).substring(7);
        socket_instance.join(`${roomid}`);
        console.log(`Joined Room -> ${roomid}`);
        socket_instance.on("posts", (data: any) => {
            console.log(data);
            socket_instance.to(`${roomid}`).emit("ack", { actions: "success", post: "success" });
        });
    });
}

const generateController = () => {
    return {
        Chat_room: Chat_room
    }
}

export default generateController;