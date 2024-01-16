import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    if(count < 20){
      setCount(count + 1)
    }
  }

  const handleRemove = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
     <h1>Counter value: {count}</h1>
     <button onClick={handleAdd}>Increament</button>
     <button onClick={handleRemove}>Decrement</button>
    </>
  )
}

export default App
