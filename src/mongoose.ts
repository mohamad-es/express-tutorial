const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);

server.listen(3005, () => console.log("sever run on http://localhost:3005"));

const MONGO_URL = "mongodb+srv://admin:<admin>@cluster0.gqbp4pb.mongodb.net/";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
