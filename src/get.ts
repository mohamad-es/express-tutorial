import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const users = [
  {
    id: 1,
    name: "Mahmood",
  },
  {
    id: 2,
    name: "Sam",
  },
];

app.get("/user/list", (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "User list found successfull",
    data: users,
  });
});

server.listen(3002, () => console.log("Server run on http://localhost:3002"));
