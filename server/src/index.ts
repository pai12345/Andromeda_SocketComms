import server from "../src/packages/server";
import { http_status } from "./utility/util";
import initialiseSocket from "./service/socket"

//Initialse HTPP Server
const initialse_server = server.initialise_server();

//Initialse Socket Server
const io = server.initialise_socket(initialse_server);

//Initialise Socket
initialiseSocket(io);

//Server graceful exit
process.on("SIGTERM", () => {
  console.log(http_status.Closing_http_server);
  initialse_server.close(() => {
    console.log(http_status.Http_server_closed);
    process.exit(0);
  });
  process.exit(0);
});