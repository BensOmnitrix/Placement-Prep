import React, { useState } from "react";
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenAtom, evenSelector } from "../store/atoms/count.jsx";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Button />
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Button() {
  const [count,setCount] = useRecoilState(countAtom);
  const evenValue = useRecoilValue(evenSelector); 

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <div>It is {evenValue}</div>
    </>
  );
}

export default App;
