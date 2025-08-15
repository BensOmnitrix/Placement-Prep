const express = require("express");
const port = 3000;
const app = express();
const people = require("./routes/people");
const authorize = require("./routes/auth");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", people);

app.use("/login", authorize);

app.listen(port, function () {
  console.log("The server is listening on port 3000");
});
