import express from "express";
import http from "http";
const morgan = require("morgan");

const app = express();
const server = http.createServer(app);

app.use(morgan("dev"));

server.listen(3004, () => console.log("server run on http://localhost:3004"));
