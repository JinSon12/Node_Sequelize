// imports
const express = require("express");
const app = express();
const PORT = 5000;

// The path module contains several helper functions
// to help make path manipulation easier.
const path = require("path");

// extracts the entire body portion of an incoming req. stream
// exposes on req.body
const bodyParser = require("body-parser");

// DB connection requirement
require("./src/database/connection");

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Custom Templating Engine
app.set("View Engine", "pug");

app.set("views", path.resolve("./src/views"));

// Request Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create Express Router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

router.use((err, req, res, next) => {
  if (err) {
    return res.send(err.message);
  }
});

app.listen(PORT, (err) => {
  if (err) return console.log(`Cannot listen on PORT: ${PORT}`);
  console.log(`Server is listening on : http://localhost:${PORT}`);
});
