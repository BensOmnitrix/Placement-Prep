import React from "react";

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <div>Title: {todo.title}</div>
            <br />
            <div>Description: {todo.description}</div>
            <br />
            <button>{todo.completed ? "Done!" : "Mark as Done"}</button>
          </div>
        );
      })}
    </div>
  );
}
