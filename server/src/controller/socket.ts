
// Chat namespace
// const Chat_room = (io:any) => {
//     const nsChat = io.of("/Chat");
//     nsChat.on("connection", (socket_instance) => {
//         console.log(`Socket Client connected`);
//         socket_instance.on("posts", (data: any) => {
//             console.log(data);
//             socket_instance.emit("ack", { actions: "success", post: "success" });
//         });
//     });
//     nsChat.engine.on("connection_error", (err: any) => {
//         console.log({
//             req: err.req,
//             code: err.code,
//             message: err.message,
//             context: err.context
//         });
//         return {
//             req: err.req,
//             code: err.code,
//             message: err.message,
//             context: err.context
//         }
//     });
// }

// const generateController = () => {
//     return {
//         Chat_room: Chat_room
//     }
// }

// export default generateController;