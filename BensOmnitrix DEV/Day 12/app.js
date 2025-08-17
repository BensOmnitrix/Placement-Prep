const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { SignupSchema } = require("./input_validation.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtPassword = require("./jwtPassword.js");

mongoose.connect(
  "mongodb+srv://{username}:{password}@cluster0.m8z18gx.mongodb.net/user_project" // Use your own username and password
);

const UserSchema = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

function SignUpValidation(req, res, next) {
  try {
    const data = SignupSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
}

function JWT_check(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ success: false, msg: "No token provided" });
  }
  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  try {
    const decode = jwt.verify(token, jwtPassword);
    if (decode) {
      req.headers["decode"] = decode;
      next();
    }
  } catch (err) {
    res
      .status(411)
      .json({ success: false, msg: "The JWT token could not be verified" });
  }
}

app.use(express.json());

app.post("/signup", SignUpValidation, async (req, res) => {
  const { name, email, password } = req.body;

  const exisitingUser = await UserSchema.findOne({ email: email });
  if (exisitingUser) {
    res
      .status(409)
      .json({ success: false, msg: "Email exists...Try signing in" });
    return;
  }
  const hashPassword = await bcrypt.hash(password, 12);

  const user = new UserSchema({
    name: name,
    email: email,
    password: hashPassword,
  });

  await user.save();
  return res
    .status(200)
    .json({ success: true, msg: "SignUp successful..Now login" });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const exisitingUser = await UserSchema.findOne({ email: email });
  if (
    exisitingUser &&
    (await bcrypt.compare(password, exisitingUser.password))
  ) {
    const token = jwt.sign(
      { name: exisitingUser.name, email: exisitingUser.email },
      jwtPassword,
      { expiresIn: "1h" }
    ); // Used the name, password from the db such that the person could send the admin and the token mey be the admin itself so why not to protect
    res.status(200).json({ success: true, JWT_Token: token });
    return;
  }
  res.status(401).json({ success: false, msg: "Incorrect email or password" });
});

app.get("/users", JWT_check, async (req, res) => {
  const { decode } = req.headers;
  const allOtherUsers = await UserSchema.find({ email: { $ne: decode.email } });
  res.status(200).json({ success: true, msg: allOtherUsers });
});

app.all(/.*/, (req, res) => {
  res
    .status(404)
    .json({ success: false, msg: "Something went wrong..Try Again later" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    success: false,
    msg: "Something is up with our server..Try again later",
  });
});

app.listen(3000, function () {
  console.log("The server is listening on 3000");
});
