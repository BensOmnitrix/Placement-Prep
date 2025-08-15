const express = require("express");
const zod = require("zod");
const app = express();

let errCount = 0;

// let numberofRequests = 0;
// const calculateRequests = (req, res, next) => {
//   numberofRequests++;
//   console.log(numberofRequests);
//   next();
// };

// let totalTime = 0;
// const averageTime = (req, res, next) => {
//   const start = Date.now();

//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     totalTime += duration;

//     const avgTime = totalTime / numberofRequests;
//     console.log(`The average time for a request is ${avgTime} ms`);
//   });

//   next();
// };

// const userValidation = (req, res, next) => {
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if (username != "harkirat" || password != "pass") {
//     res.status(403).json({
//       success: false,
//       msg: "Cannot retrieve the data",
//     });
//   } else {
//     next();
//   }
// };
// const kidneyValidation = (req, res, next) => {
//   const kidneyId = req.query.kidneyId;

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(403).json({ success: false, msg: "Entered wrong inputs" });
//     return;
//   } else {
//     next();
//   }
// };

// const heartValidation = (req, res, next) => {
//   const heartId = req.query.heartId;

//   if (heartId != 1) {
//     res.status(403).json({ success: false, msg: "Entered wrong inputs" });
//     return;
//   } else {
//     next();
//   }
// };

// app.use([calculateRequests, averageTime]);

// app.get("/health-checkup", [userValidation], (req, res) => {
//   res.json({ success: true, msg: "Your health is completely fine" });
// });
// app.get("/kidney-checkup", [userValidation, kidneyValidation], (req, res) => {
//   res.json({ success: true, msg: "Your kidney is completely fine" });
// });
// app.get("/heart-checkup", [userValidation, heartValidation], (req, res) => {
//   res.json({ success: true, msg: "Your heart is completely fine" });
// });

//Input Validation
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  if (!kidneys) {
    res.status(411).json({
      success: false,
      msg: "Wrong inputs provided",
    });
    return;
  }

  res.send(`You have ${kidneyLength} kidneys`);
});

//global catches
app.use((err, req, res, next) => {
  errCount++;
  console.log(errCount);
  res.status(404).json({
    success: false,
    msg: "Something went wrong",
  });
  next(err);
});

app.use((err, req, res, next) => {
  res
    .status(404)
    .json({
      success: false,
      msg: "Mainly I gess something happened with the server",
    });
});

app.listen(3000, function () {
  console.log("The server is listening on port 3000");
});
