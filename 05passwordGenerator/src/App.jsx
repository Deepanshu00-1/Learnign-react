import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNUmberAllowed] = useState(false);

  return(
    <h1 className='text-6xl text-center text-white'>Password Generator</h1>
  )
}

export default App


















