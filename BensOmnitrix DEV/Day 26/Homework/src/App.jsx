import React from "react";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import {
  descriptionAtom,
  filterAtom,
  filterSelector,
  titleAtom,
  todoAtom,
} from "./store/atoms/todos";
import { useRef } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <InputComponent />
        <ButtonComponent />
        <FilterComponent />
      </RecoilRoot>
    </div>
  );
}

function InputComponent() {
  const setTitle = useSetRecoilState(titleAtom);
  const setDescription = useSetRecoilState(descriptionAtom);
  const setFilter = useSetRecoilState(filterAtom);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const filterRef = useRef();

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          clearTimeout(titleRef.current);
          titleRef.current = setTimeout(() => {
            setTitle(e.target.value);
          }, 500);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          clearTimeout(descriptionRef.current);
          descriptionRef.current = setTimeout(() => {
            setDescription(e.target.value);
          }, 500);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Filter value"
        onChange={(e) => {
          clearTimeout(filterRef.current);
          filterRef.current = setTimeout(() => {
            setFilter(e.target.value);
          }, 500);
        }}
      />
      <br />
      <br />
    </div>
  );
}

function ButtonComponent() {
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  const setTodo = useSetRecoilState(todoAtom);

  return (
    <div>
      <button
        onClick={() => {
          setTodo((todo) => [
            ...todo,
            {
              title: title,
              description: description,
            },
          ]);
        }}
      >
        Add Todo
      </button>
      <br /><br />
    </div>
  );
}

function FilterComponent() {
  const filterTodos = useRecoilValue(filterSelector);

  return (
    <div>
      <select>
        <option value="">Search Todos</option>
        {filterTodos.map(({title,description}) => {
          return <option>Title = {title}, Description = {description}</option>;
        })}
      </select>
    </div>
  );
}

export default App;
