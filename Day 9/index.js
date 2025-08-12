const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/todos", (req, res) => {
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot retrieve the JSON data" });
    }
    try {
      const newData = JSON.parse(data);
      res.status(200).json({ success: true, data: newData });
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot parse the JSON data" });
    }
  });
});

app.post("/todos", (req, res) => {
  const { title, completed, description } = req.body;
  fs.readFile("./todos.json", "utf-8", (err, data) => {
    if (err) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot retrieve the JSON data" });
    }
    try {
      const newData = JSON.parse(data);
      const addItem = {
        id: parseInt(Math.random() * 1000000),
        title,
        completed,
        description,
      };
      newData.push(addItem);
      fs.writeFile(
        "./todos.json",
        JSON.stringify(newData, null, 2),
        function () {
          res.status(201).send({ success: true, id: addItem.id });
        }
      );
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot parse the JSON data" });
    }
  });
});

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./todos.json", "utf-8", function (err, data) {
    if (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Cannot retrieve the give JSON data" });
    }
    try {
      const newData = JSON.parse(data);
      const todoItem = newData.filter(
        (newData) => newData["id"] === Number(id)
      );
      res.status(200).json({ success: true, data: todoItem });
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot retrieve the todo items" });
    }
  });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./todos.json", "utf-8", function (err, data) {
    if (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Cannot retrieve the give JSON data" });
    }
    try {
      const newData = JSON.parse(data);
      const todoItem = newData.find((data) => data["id"] == Number(id));
      if (todoItem) {
        todoItem.title = req.body.title;
        todoItem.completed = req.body.completed;
        fs.writeFile(
          "./todos.json",
          JSON.stringify(newData, null, 2),
          (err) => {
            if (err) {
              return res
                .status(411)
                .json({ success: true, msg: "Cannot update the item" });
            }
            return res
              .status(200)
              .json({ success: true, msg: "Todo is updated" });
          }
        );
      } else {
        return res
          .status(404)
          .json({
            success: false,
            msg: "Todo cannot be updated. Try again after sometime",
          });
      }
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot retrieve the todo items" });
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./todos.json", "utf-8", function (err, data) {
    if (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Cannot retrieve the give JSON data" });
    }
    try {
      const newData = JSON.parse(data);
      const updatedData = [];
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id != id) {
          updatedData.push(newData[i]);
        }
      }
      fs.writeFile("./todos.json", JSON.stringify(updatedData, null, 2), (err) => {
        if (err) {
          return res
            .status(411)
            .json({ success: true, msg: "Cannot delete the item" });
        }
        return res.status(200).json({ success: true, msg: "Todo is updated" });
      });
      res
        .status(200)
        .json({ success: true, msg: "The todo has been successfully deleted" });
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, msg: "Cannot retrieve the todo items" });
    }
  });
});

app.all(/.*/, (req, res) => {
  res.status(404).json({ success: true, msg: "Page does not exist" });
});

app.listen(3000, function () {
  console.log("The server is listening on the port 3000");
});
    