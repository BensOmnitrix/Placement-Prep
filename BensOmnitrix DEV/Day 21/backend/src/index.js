const express = require("express");
const fs = require("fs");
const app = express();
const bcrypt = require("bcrypt");
const PORT = 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_KEY = "secret_key";
const { UserSchema, TodoSchema } = require("./db/schema.js");
const { signupSchema, signinSchema } = require("./validation/validation.js");
const { success } = require("zod");

mongoose.connect(
  "mongodb+srv://BensOmnitrix:terimaakijai1234@cluster0.m8z18gx.mongodb.net/usersTodo"
);

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

function SignupValidation(req, res, next) {
  //Write Signup validation code
  try {
    const { name, email, password, confirmPassword } = req.body;
    const response = signupSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    });
    if (response.success) {
      return next();
    }
    return res.status(404).json({
      success: false,
      message: "Wrong Inputs..Try Again",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
}

function SigninValidation(req, res, next) {
  //Signin validation code
  try {
    const { email, password } = req.body;
    const response = signinSchema.safeParse({
      email,
      password,
    });
    if (response.success) {
      return next();
    }
    return res.status(404).json({
      success: false,
      message: "Wrong Inputs..Try Again",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
}

app.use(express.json());

app.post("/signup", SignupValidation, async (req, res) => {
  //Signup auth code
  const { name, email, password } = req.body;

  const exisitingUser = await User.findOne({ email: email });

  if (exisitingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name: name,
    email: email,
    password: hashPassword,
  });

  await newUser.save();

  return res.status(200).json({
    success: true,
    message: "User has been successfully signed up",
  });
});

app.post("/signin", SigninValidation, async (req, res) => {
  //Signin auth code
  const { email, password } = req.body;

  const exisitingUser = await User.findOne({ email });

  if (!exisitingUser) {
    return res.status(400).json({
      success: false,
      message: "User does not exists",
    });
  }
  if (!(await bcrypt.compare(password, exisitingUser.password))) {
    return res.status(400).json({
      success: false,
      message: "Invalid password",
    });
  }
  const token = jwt.sign({ _id: exisitingUser._id }, JWT_KEY, {
    expiresIn: "1h",
  });
  return res.status(200).json({
    success: true,
    message: `Bearer ${token}`,
  });
});

function JWT_AUTH(req, res, next) {
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(400).json({
        success: false,
        message: "Token not provided"
    })
  }
  try {
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, JWT_KEY);

    if (!decode) {
      return res.status(400).json({
        success: false,
        message: "Token could not be verified",
      });
    }

    req.user_id = decode._id;
    return next();

  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

app.use(JWT_AUTH);

app.post("/todo/add", async (req, res) => {
  try {
    const { title, description } = req.body;

    const addTodo = new Todo({
      title: title,
      description: description,
      completed: false,
    });

    await addTodo.save();

    const { user_id } = req;

    await User.updateOne({ _id: user_id }, { $push: { todos: addTodo._id } });

    return res.status(200).json({
      success: true,
      message: "Todo has been added successfully",
      todo: addTodo,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

app.put("/todo/update", async(req, res) => {
    const {id, title, description, completed} = req.body;

    const updatedTodo = await Todo.updateOne({
        id: id,
        title: title, 
        description: description, 
        completed: completed
    })

    const {user_id} = req;

});

app.get("/todo/get", (req, res) => {});

app.delete("/todo/delete", (req, res) => {});

app.all(/.*/, (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Something is wrong with the server",
  });
});

app.use((err, req, res, next) => {
  fs.readFile("./error_logs/errors.txt", "utf-8", function (e, data) {
    if (e) {
      console.log("Failed to read the logs");
    }
    const newLogs = data + `\n` + err;
    fs.writeFile("./error_logs/errors.txt", newLogs, function (err) {
      if (err) {
        console.log("Failed to log the error");
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
