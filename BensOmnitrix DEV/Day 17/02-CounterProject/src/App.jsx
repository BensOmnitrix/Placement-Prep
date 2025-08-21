import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter == 10){
      return;
    }
    counter++;
    setCounter(counter);
  }
  const removeValue = () => {
    if(counter == 0){
      return ;
    }
    counter--;
    setCounter(counter);
  }

  return (
    <>
      <h1>Hey there,How are you doing</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
