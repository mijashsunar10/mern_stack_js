import React from 'react'
import spin from '../assets/spin.png'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>

        <p id='user-title'>{props.name}</p>
        {/* <img id='user-img' src="../assets/sping.png"/> This is not the way we need to import it */}
        <img id='user-img' src={props.image}/>
        <p id='user-desc'>{props.desc}</p>


      
    </div>
  )
}

export default UserCard

// In jsx there is no class there is classNameo
//Props are exported and imported in  other componet
// JSx is the file where we can write html code and javascript code easily there
// In js file if w ehave to write hmtl code the we should have jsx file
