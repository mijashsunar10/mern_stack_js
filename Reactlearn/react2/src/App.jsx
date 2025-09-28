
import './App.css'
import UserCard from './components/UserCard'
import spin from './assets/spin.png'
import hello from './assets/hello.jpg'
import gpt from './assets/gpt.png'

function App() {
 
  return (
    <>
    <div className='container'>

    <UserCard name="Anmol Sunar" desc="k xa dost" image={spin}/>
    <UserCard name="Sabina Sunar" desc="Thik xa sab" image={gpt} style={{"border-radius":"10px"}}/>
    <UserCard name="Barsha Sunar"  desc="hora" image={hello}/>
        
    </div>
    {/* <div>
       there cant be two div
    </div> */}
    </>
  )
}

export default App
