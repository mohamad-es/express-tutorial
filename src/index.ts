import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.post("/user/create", (req, res) => {
  res.send(req.body);
});

server.listen(3000, () => {
  console.log("server running  http://localhost:8080");
});
