import React from 'react'
import { useState } from 'react';

function App() {
  return (
    <>
      <Count />
    </>
  )
}

function Count(){
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <Buttons setCount={setCount} count={count} />
    </>
  )
}

function Buttons({setCount,count}) {
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase Count</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease Count</button>
    </>
  )
}

export default App
