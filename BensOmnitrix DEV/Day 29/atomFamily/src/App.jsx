import React from "react";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { todoAtomFamily } from "../store/atom/atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <UpdaterComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function UpdaterComponent() {
  const updatedTodo = useSetRecoilState(todoAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updatedTodo({
        id: 2,
        text: "Aur bhai kya haal chal",
        completed: true,
      });
    },5000);
  }, []);

  return <div></div>;
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return (
    <div>
      <div>{currentTodo.text}</div>
      <div>{currentTodo.completed ? "Done!" : "Mark as Done"}</div>
    </div>
  );
}

export default App;
