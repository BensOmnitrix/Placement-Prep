  import { useState } from "react"
  import { CountContext } from "../Context";
  import { useContext } from "react";

  function App() {
    const [count, setCount] = useState(0);
    
    //wrap anyone that wants to use the teleported value inside a provider 
    return (
      <div>
        <CountContext.Provider value={{count, setCount}} >
          <Count />
        </CountContext.Provider>
      </div>
    )
  }

  function Count() {
    const {setCount} = useContext(CountContext);
    return <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  }

  function CountRenderer() {
    const {count} = useContext(CountContext);
    return <div>
      {count}
    </div>
  }

  function Buttons() {

    const {count, setCount} = useContext(CountContext)
    return <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>

      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>
    </div>
  }

  export default App