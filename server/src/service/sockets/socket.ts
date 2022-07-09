let io;
const init = (httpServer) => {
    io = require("socket.io")(httpServer, {
        cors: {
            origin: "*",
        },
    });
    return io;
}

const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized")
    }
    return io;
}

const generatesocket = () => {
    return {
        init: init,
        getIO: getIO,
        io: io
    }
}

export default generatesocket;