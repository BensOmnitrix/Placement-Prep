const { log } = require("console");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "lakshaybatra1234";

const ALL_USERS = [
  {
    username: "Harkirat",
    password: "125426354",
    name: "Harkirat Singh",
  },
  {
    username: "BensOmnitrix",
    password: "Ben10bay",
    name: "Lakshay Batra",
  },
  {
    username: "Nandika",
    password: "Hithere",
    name: "Nandika Batra",
  },
];

function usernameExists(name, pass) {
  const authArray = ALL_USERS.find(({ username, password }) =>
    username === name && password === pass
  );
  if(!authArray){
    return false;
  }
  return true;
}

const auth = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!usernameExists(username, password)) {
    res.status(403).json({
      success: false,
      msg: "Incorrect username or password..Try Again",
    });
    return;
  }
  next();
};

app.post("/signin", auth, (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  // Now Hash the password and then check the BE server that it is correct if yes then return the JWT token..
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.status(200).json({
    success: true,
    tokenize: token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const user = decoded.username;
    const newResult = ALL_USERS.filter(({ username }) => 
      username != user
    );
    return res.status(200).json({
      success: true,
      data: newResult,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      msg: "Unauthorized token..Try again sending the correct one",
    });
  }
});

app.listen(3000,function(){
    console.log("The server is listening on the port 3000");
    
})
