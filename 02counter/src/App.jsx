import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log('value added', counter);
    if(counter<20){
      counter = counter+1;
      setCounter(counter)
    }else{
      counter = 20
    }
  }

  const subValue=()=>{
    if(counter>0){
      counter = counter-1;
      setCounter(counter)
    }else{
      counter=0
    }
  }

  return (
    <>
    <h1 class="h1">Counter</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Increase value</button>
    <br />
    <button 
    onClick={subValue}
    >Decrease value</button>
    </>
  )
}

export default App

