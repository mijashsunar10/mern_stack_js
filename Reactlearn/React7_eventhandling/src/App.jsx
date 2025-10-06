import { useState } from 'react'

import './App.css'

function App() {

  const handleClick = () => {
    alert('Button Clicked!')
  }

  function handleMouseOver() {
    alert('Mouse Over Event Triggered')
  }

  function handleInputChange(e) {
    console.log('Input Value gets cahnges',e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form Submitted!')
  }






  return (

    // <div>
    //   <button onClick={() => alert('Button Clicked!')}>
    //     Click Me
    //   </button>
    // </div> THis is direct way for alert

    // <div>
    //   <p onMouseOver={handleMouseOver} style={{color:"red"}}>I m p</p>
    // <button onClick={handleClick}>
    //   Click Me
    // </button>
    // </div>

    // <div>
    //   <input type="text" onChange={handleInputChange} />
    // </div>

    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
      </form>
    </div>
 
  )
}

export default App
