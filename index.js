const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello twitter");
});

app.get("/github", (req, res) => {
  res.send("Hello github");
});

app.listen(port, () => {
  console.log(`Backend app listening at ${port}`);
});
