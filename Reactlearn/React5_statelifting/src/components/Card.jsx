import React from 'react'

import './Card.css'

const Card = (props) => {
  return (
    <div>

        <input type="text" onChange={(e)=> props.setName(e.target.value)} />  

        <p>Title is {props.title}</p>
        <p>I am a child component :{props.name}</p>    
    </div>
  )
}

export default Card
