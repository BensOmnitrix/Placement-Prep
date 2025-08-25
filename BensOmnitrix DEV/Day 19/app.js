const express = require("express");
const zod = require("zod");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {userSignUpSchema,userSignInSchema} = require("./input_validation.js");
const jwtPassword = require("../Day 12/jwtPassword.js");
const app = express();

mongoose.connect(
  "mongodb+srv://BensOmnitrix:terimaakijai1234@cluster0.m8z18gx.mongodb.net/todo_app"
);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todos", TodoSchema);

function SignInvalidation(req, res, next) {
  const { email } = req.body;
  const result = userSignInSchema.safeParse({
    email: email,
  });

  if (!result.success) {
    return res.status(200).json({
      success: false,
      msg: "The email is not correct...",
    });
  } else {
    next();
  }
}

function SignUpvalidation(req, res, next) {
  const { name, email, password } = req.body;
  const result = userSignUpSchema.safeParse({
    name: name,
    email: email,
    password: password,
  });

  if (!result.success) {
    return res.status(200).json({
      success: false,
      msg: "The input is not correct...Change the password according to having min 8 letters, capital letters etc.",
    });
  } else {
    next();
  }
}

function JWT_auth(req, res, next) {
  const authId = req.headers.authorization;
  if (!authId) {
    return res.status(400).json({
      success: false,
      msg: "The token is not provided",
    });
  }

  try {
    const decode_data = jwt.verify(authId.split(" ")[1], jwtPassword);
    if (decode_data) {
      req["data"] = decode_data;
      next();
    }
  } catch (err) {
    return res.status(404).json({
      success: false,
      msg: "Token cannot be verified",
    });
  }
}

app.use(express.json());

app.post("/signup", SignUpvalidation, async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(401).json({
      success: false,
      msg: "Email exists...Try with another email",
    });
    return;
  }

  const hashPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name: name,
    email: email,
    password: hashPassword,
  });

  await newUser.save();

  res.status(200).json({
    success: true,
    msg: "The user has been appended successfully to the database.. Signup is successful..Login to our website",
  });

  return;
});

app.post("/signin", SignInvalidation, async (req, res) => {
  const { email, password } = req.body;

  const exisitingUser = await User.findOne({ email: email });

  if (
    exisitingUser &&
    (await bcrypt.compare(password, exisitingUser.password))
  ) {
    try {
      const token = jwt.sign(
        {
          name: exisitingUser.name,
          email: exisitingUser.email,
        },
        jwtPassword,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        success: true,
        data: token,
      });
      return;
    } catch (err) {
      return res.status(400).json({
        success: false,
        msg: "The token could not be generated..Try again later",
      });
    }
  }
});

app.use(JWT_auth);

app.get("/get_todo", async (req, res) => {
  const { title, description } = req.body;

  const exisitingTodo = await Todo.findOne({
    title: title,
    description: description,
  });

  if (exisitingTodo) {
    return res.status(200).json({
      success: true,
      data: exisitingTodo,
    });
  }

  return res.status(400).json({
    success: false,
    msg: "Todo does not exists",
  });
});

app.post("/add_todo", async (req, res) => {
  const { title, description } = req.body;

  const exisitingTodo = await Todo.findOne({
    title: title,
    description: description,
  });

  if (exisitingTodo) {
    return res.status(400).json({
      success: false,
      msg: "Todo already exsists in the database..Complete it or delete it and Try again later",
    });
  }

  const newTodo = new Todo({
    title: title,
    description: description,
    completed: false,
  });

  await newTodo.save();

  return res.status(200).json({
    success: true,
    msg: "Todo has been added successfully",
  });
});

app.put("/update_todo/:id", async (req, res) => {
  const _id = req.params.id;
  const data = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      data: updatedTodo,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: "The todo cannot be updated",
    });
  }
});

app.delete("/delete_todo/:id", async (req, res) => {
  const _id = req.params.id;

  const deleteTodo = await Todo.findByIdAndDelete(_id);

  if (deleteTodo) {
    return res.json({
      success: true,
      msg: "The Todo has been successfully deleted",
      data: deleteTodo,
    });
  }

  return res.json({ success: false, msg: "The Todo has not been deleted" });
});

app.all(/.*/, (req, res) => {
  res.status(404).json({
    success: false,
    msg: "The following webpage is not available",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).json({
    msg: "Something wrong happen with the server... Try again after sometime",
  });
});

app.listen(3000, function () {
  console.log("The server is listening on the port 3000");
});
