import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about');
    }
  return (
    //Use Nvaigation Hook to navigate programmatically
    <div>

        Home Pgae

        <button onClick={handleClick}>
            Click Me to got to About Page
        </button>
      
    </div>
  )
}

export default Home
