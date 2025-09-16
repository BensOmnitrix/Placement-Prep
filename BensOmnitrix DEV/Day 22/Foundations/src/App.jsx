import React, { useEffect, useState } from "react";

// Pushing down the state
// function App() {
//   return (
//     <>
//       <HeaderwithButton />
//       <Header title="My name is Raman"/>
//     </>
//   )
// }

// function HeaderwithButton(){
//   const [title,setTitle] = useState("My name is Harkirat");

//   return (
//     <>
//       <button onClick={() => {
//         setTitle("My name is" +   (Math.random()))
//       }}>Click me to change the title</button>
//       <Header title={title}/>
//     </>
//   )
// }

// function Header({title}){
//   return (
//     <>
//       <div>{title}</div>
//     </>
//   )
// }

// Memoizing
// function App(){
//   const [title,setTitle] = useState("Harkirat");
//   console.log("App re renders");
//   return (
//     <>
//       <Button setTitle={setTitle}/>
//       <Header title={title}/>
//       <Header title="Raman"/>
//     </>
//   )
// }

// const Button = React.memo(({setTitle}) => {
//   console.log("Button Renders");
//   return (
//     <>
//      <button onClick={() => {
//         setTitle(Math.random());
//       }}>Click to change the title</button>
//     </>
//   )
// })

// // Memoizing => Will not change if the props in it is not changed
// const Header = React.memo(({title}) => {
//   console.log("Header is rendering" + title);
//   return (
//     <>
//       <div>My name is {title}</div>
//     </>
//   )
// })

// When the array is there put the key prop in the Todo as an input...Helps the react to re render
// function App(){
//   const [todos,setTodos] = useState([
//     {
//       id: 0,
//       title: "Todo 1",
//       desc: "Desc 1"
//     },
//     {
//       id: 1,
//       title: "Todo 2",
//       desc: "Desc 2"
//     }
//   ])

//   return (
//     <>
//       <Button setTodos={setTodos} todos={todos}/>
//       {todos.map(({id,title,desc}) => {
//         return <Todo key={id} title={title} desc={desc}/>
//       })}
//     </>
//   )
// }

// const Button = React.memo(({setTodos,todos}) => {
//   const [count,setCount] = useState(3);

//   return (
//     <button onClick={() => {
//       setCount(count + 1);
//       setTodos([...todos, {
//         id: count,
//         title: `New todo ${count}`,
//         desc: `New desc ${count}`
//       }])
//     }}>Add new Todo</button>
//   )
// })

// function Todo({title,desc}) {
//   return (
//     <>
//       <div>Title: {title}</div>
//       <div>Desc: {desc}</div>
//       <br />
//     </>
//   )
// }

// Wrapper Components
// let counter = 3;

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Todo 1",
//       desc: "Desc 1",
//     },
//     {
//       id: 2,
//       title: "Todo 2",
//       desc: "Desc 2",
//     },
//     {
//       id: 3,
//       title: "Todo 3",
//       desc: "Desc 3",
//     },
//   ]);
//   return (
//     <>
//       <CardWrapperComponent>
//         <TextComponent text={"Hey there!"} />
//         <ButtonComponent setTodos={setTodos} todos={todos} />
//       </CardWrapperComponent>
//       <CardWrapperComponent>
//         {todos.map(({ id, title, desc }) => (
//           <TodoComponent key={id} title={title} desc={desc} />
//         ))}
//       </CardWrapperComponent>
//     </>
//   );
// }

// function TodoComponent({ title, desc }) {
//   return (
//     <>
//       <div>Title = {title}</div>
//       <div>Description = {desc}</div>
//     </>
//   );
// }

// function ButtonComponent({ todos, setTodos }) {
//   return (
//     <>
//       <button
//         onClick={() => {
//           setTodos([
//             ...todos,
//             {
//               id: counter++,
//               title: `Todo ${counter}`,
//               desc: `Desc ${counter}`,
//             },
//           ]);
//         }}
//         style={{
//           borderRadius: "5px",
//           marginTop: "10px",
//         }}
//       >
//         Click me to add new todos
//       </button>
//     </>
//   );
// }

// function TextComponent({ text }) {
//   return (
//     <>
//       <div>{text}</div>
//     </>
//   );
// }

// function CardWrapperComponent({ children }) {
//   return (
//     <>
//       <div
//         style={{
//           border: "2px solid black",
//           boxShadow: "5px 10px 10px black",
//           borderRadius: "5px",
//           backgroundColor: "#358fb3",
//           marginLeft: "10px",
//           marginTop: "50px",
//           width: "20%",
//           padding: "10px",
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// }

//useEffect Hook
// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(
//       () =>
//         fetch("https://sum-server.100xdevs.com/todos").then((response) => {
//           response.json().then((data) => {
//             setTodos(data.todos);
//           });
//         }),
//       20 * 1000
//     );

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return <></>;
// }
export default App;
