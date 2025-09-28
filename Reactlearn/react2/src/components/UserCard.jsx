import React from 'react'
import spin from '../assets/spin.png'
import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user-container'>

        <p id='user-title'>MIjash Sunar</p>
        {/* <img id='user-img' src="../assets/sping.png"/> This is not the way we need to import it */}
                <img id='user-img' src={spin}/>
        <p id='user-desc'>Description</p>


      
    </div>
  )
}

export default UserCard

// In jsx there is no class there is className
