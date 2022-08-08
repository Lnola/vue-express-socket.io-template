import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

// documentation for handling cookies -> https://socket.io/how-to/deal-with-cookies
const io = new Server(server, {
  cors: {
    origins: ["http://localhost:4000"],
  },
});

// middleware documentation -> https://socket.io/docs/v4/middlewares/
io.use((socket, next) => {
  // middleware function
  next();
});

// basic communication documentation -> https://socket.io/docs/v4/server-socket-instance/
io.on("connection", (socket, next) => {
  console.log("A user connected!");

  socket.on("disconnect", () => {
    console.log("A user disconnected!");
  });
});

server.listen(4001, () => console.log("App listening on port 4001"));
