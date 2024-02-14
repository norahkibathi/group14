import { useState } from 'react'
import About from './about'
import "./about.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
    </>
  )
}

export default App
