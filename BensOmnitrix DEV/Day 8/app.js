const express = require("express");
const port = 3000;
const app = express();
const hospital = require("./routes/hospital");

app.use(express.json());

app.use("/hospital", hospital);

app.all(/.*/, (req, res) => {
  res.status(401).send("The following page does not exist");
});

app.listen(port, function () {
  console.log("The server is listening to 3000");
});
