import React, { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="Title"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br /> <br />
      <input
        id="description"
        type="text"
        placeholder="Description"
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br /> <br />
      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo/add", {
            method: "POST",
            headers: {
              "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGIxZjI3NDhlMjcyODM5YjZmODFmNjkiLCJpYXQiOjE3NTY2NDUzODksImV4cCI6MTc1NjY0ODk4OX0.vKKQ696Z4vMPdkJ93Sxu4B4OPQQWq_l1tzUfxjSEPJY",
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              title: title,
              description: description,
              completed: false,
            }),
          });
        }}
      >
        Add a Todo
      </button>
      <br />
      <br />
    </div>
  );
}
