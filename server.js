import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

server.listen(4001, () => console.log("App listening on port 4001"));
