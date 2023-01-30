import { useState } from 'react'
import './App.css'
import { InputType } from "./components/InputType/InputType";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <InputType />
      <InputType />
      <InputType />

    </div>
  )
}

export default App
