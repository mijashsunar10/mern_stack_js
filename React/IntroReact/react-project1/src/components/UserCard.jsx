import React from 'react'

import picture from '../assets/spin.png'

import './UserCard.css'

const UserCard = () => {
  return (
    <div className="user-container">

    <p id='user-name'>Love Mijash</p>

      <img id='user-image' src={picture} alt="" />

      <p id='user-description'>Description of Mijash</p>
      
    </div>
  )
}

export default UserCard




///rfce is importent cuz we need to export the componet without exporting we cannot import
//In ajvascript class doesnt start because it is a reserved word so we use className