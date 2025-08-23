import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to Gym from 7-9 pm",
      completed: false,
    },
    {
      title: "Study DSA from 9-11",
      description: "Study DSA",
      completed: true,
    },
  ]);

  function addTodo(){

  }

  return (
    <>
      {todos.map((todo) => {
        return <Todo
          title={todo.title}
          description={todo.description}
          completed={todo.completed ? "✅" : "❌"}
        />;
      })}
      <button onClick={() => {
        setTodos([...todos,{
          title: "New Task",
          description: "New Desc",
          completed: false
        }])
      }}>Add a new Todo</button>
    </>
  );
}

function Todo(props) {
  return (
    <>
      <div>Title: {props.title}</div>
      <div>Description: {props.description}</div>
      <div>Completed: {props.completed}</div>
      <br />
    </>
  );
}

export default App;
