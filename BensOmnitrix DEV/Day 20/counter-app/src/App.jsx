import { useState } from "react";
import Button from "../../components/Button";
import Todo from "../../components/Todo";

function App() {
  let id = 2;
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Go to Gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      id: 1,
      title: "Study DSA from 9-11",
      description: "DSA => 9-11",
      completed: true,
    },
    {
      id: 2,
      title: "Study DEV from 11-1",
      description: "DEV => 11-1",
      completed: true,
    },
  ]);

  return (
    <>
      {todos.map((todo) => {
        return <Todo allTodos={todos} todo={todo} setTodo={setTodos} />;
      })}
      <button
        onClick={() => {
          id = id + 1;
          return setTodos([
            ...todos,
            {
              id: id,
              title: "New Todo",
              description: "New Desc",
              completed: false,
            },
          ]);
        }}
      >
        Add Todo
      </button>
    </>
  );
}

export default App;
