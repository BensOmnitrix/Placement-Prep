import { useEffect, useState } from "react"
import { CreateTodo } from "../components/CreateTodo"
import { Todos } from "../components/Todos"

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo/get",{
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGIxZjI3NDhlMjcyODM5YjZmODFmNjkiLCJpYXQiOjE3NTY2NDUzODksImV4cCI6MTc1NjY0ODk4OX0.vKKQ696Z4vMPdkJ93Sxu4B4OPQQWq_l1tzUfxjSEPJY"
    }
  }).then((response) => {
    response.json().then((data) => {
      setTodos(data.data);
    })  
  });
  }, [])

  return (
    <>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
