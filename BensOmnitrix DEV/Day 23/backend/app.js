const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const todos = [
  {
    id: 1,
    title: "Work from home",
    description: "Company has said to work from home for next 15 days",
  },
  {
    id: 2,
    title: "Buy groceries",
    description: "Need to buy milk, eggs, and vegetables from the market",
  },
  {
    id: 3,
    title: "Morning workout",
    description: "Go for a 30-minute run and do stretching exercises",
  },
  {
    id: 4,
    title: "Team meeting",
    description: "Attend the Zoom call with the project team at 11 AM",
  },
  {
    id: 5,
    title: "Doctor appointment",
    description: "Visit the dentist for a regular checkup at 5 PM",
  },
  {
    id: 6,
    title: "Finish assignment",
    description: "Complete the React project assignment before the deadline",
  },
  {
    id: 7,
    title: "Read a book",
    description: "Spend at least 1 hour reading 'Atomic Habits'",
  },
  {
    id: 8,
    title: "Clean room",
    description: "Organize the desk and clean the bedroom floor",
  },
  {
    id: 9,
    title: "Pay bills",
    description: "Pay the electricity and internet bills online",
  },
  {
    id: 10,
    title: "Call parents",
    description: "Catch up with parents in the evening over a phone call",
  },
];

app.get("/todo", (req,res) => {
    const todo = todos.find(({id}) => id === Number(req.query.id));
    res.status(200).json({
        success: true,
        todo: todo
    })
})
app.listen(3000,function() {
    console.log("Server is listening on port 3000");
})