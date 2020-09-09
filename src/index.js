const express = require("express");
const path = require("path");

const PORT = 4000;
const app = express();

app.use(express.static("src/public"));

app.get("/", function (req, res) {
  const DIR = path.join(__dirname, "/views/index.html");
  res.sendFile(DIR);
});
app.get("/about", function (req, res) {
  const DIR = path.join(__dirname, "/views/about.html");
  res.sendFile(DIR);
});
app.get("/contact", function (req, res) {
  const DIR = path.join(__dirname, "/views/contact.html");
  res.sendFile(DIR);
});

app.listen(PORT, () =>
  console.log(`Server is listening on:http://localhost:${PORT}`)
);
