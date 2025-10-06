import React from 'react'
import { useNavigate } from 'react-router-dom';


const About = () => {
    // function handleCLick(){
    //     window.location.href = '/dashboard';
    // }Page will gets refresh everytime i do this so we nne to navigate

    const navigate = useNavigate();
    function handleCLick(){
        navigate('/dashboard');
    }
    return (
    <div>

        <p>Baout
            <button onClick={handleCLick}>
                Move to dashboard page
            </button>
        </p>
      
    </div>
  )
}

export default About
