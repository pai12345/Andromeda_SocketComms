import { http_status } from "./utility/util";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

const PORT = 8000
const app = express();

app.use(json({ limit: "1GB" }));
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(compression());

//Server Listener
const server = app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
});

io.on("connection", (_) => {
    console.log(`Client connected`);
});

//Server graceful exit
process.on("SIGTERM", () => {
    console.log(http_status.Closing_http_server);
    server.close(() => {
      console.log(http_status.Http_server_closed);
      process.exit(0);
    });
    process.exit(0);
});