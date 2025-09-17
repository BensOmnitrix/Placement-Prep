import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import useAsyncEffect from "use-async-effect";
import axios from "axios";

// function App() {
//   const [id, setId] = useState(1);
//   const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

//   return (
//     <>
//       {buttons.map((value) => {
//         return <ButtonComponent key={value} value={value} setId={setId} />;
//       })}
//       <TodoComponent id={id} />
//     </>
//   );
// }

// function ButtonComponent({ value, setId }) {
//   return (
//     <>
//       <button
//         onClick={() => {
//           setId(value);
//         }}
//         style={{
//           display: "inline",
//           height: "30px",
//           width: "30px",
//         }}
//       >
//         {value}
//       </button>
//     </>
//   );
// }

// function TodoComponent({ id }) {
//   const [todo, setTodo] = useState({});

//   //useEffect is only called when the whole component is rendered...After it runs the return partt runs if the variable set in it is run in the same
//   useEffect(() => {
//     // DeBouncing has been implemented
//     // Can also be implemented in the input button
//     const timeout = setTimeout(() => {
//       fetch(`http://localhost:3000/todo?id=${id}`).then(async (response) => {
//         const data = await response.json();
//         setTodo(data.todo);
//       });
//     },1000);

//     return () => {
//       clearTimeout(timeout);
//     }
//   }, [id]);

//   return (
//     <>
//       <h2>{todo.title}</h2>
//       <h4>{todo.description}</h4>
//     </>
//   );
// }

//useMemo()

// function App() {
//   const [inputValue, setinputValue] = useState(0);
//   const [count, setCount] = useState(0);

//   const temp = useMemo(() => {
//     let ans = (parseInt(inputValue) * (parseInt(inputValue) + 1)) / 2;
//     return isNaN(ans) ? 0 : ans;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         id="input"
//         placeholder="Enter a number"
//         onChange={(e) => setinputValue(e.target.value)}
//       />
//       <p>Sum is {temp}</p>
//       <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
//     </>
//   );
// }


//useCallback

// function App(){
//   const [count,setCount] = useState(0);

//   const inputFunction = useCallback(() => {
//     console.log("Hey there");
//   },[]); //ddependency is added

//   return (
//     <div>  
//       <ButtonComponent inputFunction={inputFunction}/>
//       <button onClick={() => {
//         setCount(count+1);
//       }}>Click me {count}</button>
//     </div>
//   )
// }

// const ButtonComponent = memo(({inputFunction}) => {
//   console.log("Child Render");
//   return (
//     <>
//       <button>Button Clicked</button>
//     </>
//   )
// })


//Custom Hooks

function useTodos(){
  const [todos,setTodos] = useState([]);
  
  useEffect(() => {
    fetch("").then((res) => {
      res.json().then((data) => {
        console.log(JSON.stringify(data));
      })
    })
  })

  return todos;
}

function App(){
  const todos = useTodos();
  
  return (
    <>
        {todos}
    </>
  )
}


export default App;
