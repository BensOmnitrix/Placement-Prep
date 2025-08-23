import { useState } from 'react'
import ButtonComponent from '../components/ButtonComponent'

function App() {

  const [count,setCount] = useState(0);

  return (
    <>
      <ButtonComponent count={count} setCount={setCount}></ButtonComponent>
    </>
  )
}

export default App
