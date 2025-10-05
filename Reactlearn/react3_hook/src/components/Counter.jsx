import React from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = React.useState(0);
        // const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>You have clcked {count} times</p>
        <button id='btn' onClick={()=>{ setCount(count+1)}}>Click Me</button>
      
    </div>
  )
}

export default Counter
