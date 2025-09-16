import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [id,setId] = useState(1);
  
  return (
    <>
      <ButtonComponent id={id} setId={setId}/>
      <br /><br />
      <TodoComponent id={id}/>
    </>
  )
}

function ButtonComponent({id,setId}){
  return (
    <> 
      <button onClick={() => {
        setId((id%9) + 1)
      }}>Next</button>
    </>
  )
}

function TodoComponent({id}){
  const [todo,setTodo] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:3000/todo?id=${id}`).then(async (res) => {
      const data = await res.json();
      setTodo(data.todo);
    })
  },[id])
  return (
    <>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </>
  )
}

export default App
