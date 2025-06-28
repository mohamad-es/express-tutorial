import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

// single middleware sample
app.use(function (req, res, next) {
  console.log("This is the 1 middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("This is the 2 middleware");
  next();
});

app.use(function (req, res, next) {
  console.log("This is the 3 middleware");
  next();
});

// multiple middlewares in single app.use
app.use(
  function (req, res, next) {
    console.log("This is the 1 of multiple middleware");
    next();
  },
  function (req, res, next) {
    console.log("This is the 2 of multiple middleware");
    next();
  },
  function (req, res, next) {
    console.log("This is the 3 of multiple middleware");
    next();
  }
);

app.get("/", (req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "Middleware successfully setup",
  });
});

server.listen(3003, () => console.log("server run on http://localhost:3003"));
