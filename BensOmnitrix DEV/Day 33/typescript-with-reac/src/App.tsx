import { useState } from "react";

interface Todo{
  title: string,
  description: string
}

export const App = () => {
  const [todos, setTodo] = useState([
    {
      title: "Study DSA",
      description : "Study",
    },
    {
      title: "Study DSA",
      description : "Study",
    },
    {
      title: "Study DSA",
      description : "Study",
    },
  ]);

  return <div>
    {todos.map(({title,description}) => {
      return <TodoComponent title={title} description={description}/>
    })}
    <ButtonComponent todos={todos} setTodo={setTodo}/>
  </div>;
};

const TodoComponent = (props: Todo) => {
  return (
    <div>
      <div>Title = {props.title}</div>
      <div>Description = {props.description}</div>
    </div>
  );
};

const ButtonComponent = (props:any) => {
  return (
    <div>
      <button onClick={() => {
        props.setTodo([...props.todos,{
          title: "new Todo",
          description: "new description"
        }])
      }}>Add Todo</button>
    </div>
  )
}