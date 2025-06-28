import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// Exress core moduls
app.use(express.json());
app.use(express.urlencoded());

// Express routes
app.post("/user/create", (req, res) => {
  res.send(req.body);
});

server.listen(3001, () => console.log("server run on http://localhost:3001"));
