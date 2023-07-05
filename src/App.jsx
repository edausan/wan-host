import { useState } from 'react'
import './App.css'
// import Button from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Host App</h1>
     <button onClick={() => setCount((count) => count + 1)}>Count {count}</button>
     {/* <Button text="Button from Remote"/> */}
    </>
  )
}

export default App
