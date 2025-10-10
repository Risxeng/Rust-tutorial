import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(13)
  // let counter = 15
                                          //HW
  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      console.log("value added" , counter+1);
    }else{
      console.log("value excedded");
    }
  }
  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("value added" , counter-1);
    }else{
      console.log("counter can't be negative");
    }
  }

                                          //practise
  // const addvalue = () => {
  //   console.log("value added", counter);
  //   counter = counter + 1
  //   setCounter(counter) 
  // }
  // const removevalue = () => {
  //   console.log("value removed ", counter);
  //   counter = counter - 1;
  //   setCounter(counter)
  // }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
