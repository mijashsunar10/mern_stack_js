import React from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  const [count, setCount] = React.useState(0);
  function handleClick(){
    setCount(count+1);
  }
  

  return (
    <div>

      <Button handleClick = {handleClick} text = "Click Me" >

        <h1>{count}</h1>


        </Button>
      {/* App Parent component vaye ra button child component vayo App bhitra button vako vara Button child component ho */}




      {/* <Card name="Mijash Sunar">
      <h1>Best Web Dev Course</h1>
      <p>Trying to be consistend in this</p>
      <p>Will complete this course soon</p>
      </Card>  */}
      {/* Card bhitra ko components chai children vanxa */}
      {/* <Card children="Anmol Sunar">
        K xa mero dost
        <p>lalla</p>
        </Card> */}

        {/* <Card children="Anmol Sunar">
        
        </Card> */}


    </div>
 
  )
}

export default App
