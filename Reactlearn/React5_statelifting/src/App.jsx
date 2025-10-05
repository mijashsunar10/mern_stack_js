import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  const [name, setName] = useState('');
  // name state variable ho ra setName chai teslai update garna ko lagi function ho
  return (

    <div>
      <Card title="Card1" name={name} setName={setName}/>
      {/* It has access of state variable as well name the funciton to change the state variable */}

      <p>I m a parent component:{name}</p>
    </div>
   
  )
}

export default App
