import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const data: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

function App() {
  const [test, setTest] = useState<string>("Test")

  return (
      <div className = "main">
        <h1>hello react</h1>
        <About data={data} func={setTest} />
        <h1>{test}</h1>
        input onChange=((e) => setTest(test + e.target.value))
      </div>
  )
}

export default App
