import React from 'react'
import '../styles/App.css';
const App = () => {

  // const[input, setInput] = React.useState("")
  // const[inputNum, setInputNum] = React.useState("")
  const handleInput = (event) =>{
   // use console.log
  //  setInput(event.target.value)
  console.log(`Input in #${event.target.id} is ${event.target.value}`)
  }

  // const handleInputNum = (event) =>{
  //   // use console.log
  //   setInputNum(event.target.value)
  //   console.log(event.target.value)
  //  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" onChange={handleInput} type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" onChange={handleInput} type={'number'} />
      <br/>
    </div>
  )
}


export default App;
