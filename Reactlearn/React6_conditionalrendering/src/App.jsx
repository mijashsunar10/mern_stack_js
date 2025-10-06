import { useState } from 'react'

import './App.css'
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if(isLoggedIn){

    return(
      <LogoutButton />
    )
  }

  // }else{

  //   return(
  //     <LoginButton/>  
  //   )
    
  // }

  return (
  <div>
    <h1>Welcome Everyone to mijash suanr</h1>

    <div>

{
      isLoggedIn &&  <LogoutButton />
}
    </div>
   

  </div>
  )
}

export default App
