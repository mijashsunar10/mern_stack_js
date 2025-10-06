import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'


import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());

  }

  function handleDrementClick(){

    dispatch(decrement());

  }

  function handleResetClick(){
    // dispatch(reset());
    // reset action chai hami le create gareko xaina so error aauxa
    // reset action chai manually create garnu parxa
    // tara aba chai incrementByAmount use garera reset jasto garna sakinxa
    dispatch(reset()); // jati pani count xa tyo sabai minus garera zero ma lyauxa
  }

    function handleIncAmountClick()
    {
      dispatch(incrementByAmount(amount));
    }

  return (
  <div className='container'>
    <button onClick={handleIncrementClick}> + </button>

    <p>COUNT:{count}</p>
    <br />
    <button onClick={handleDrementClick}> - </button>
    <br />
  <button onClick={handleResetClick}> Reset </button>
  <br />
  <input type="Number"
  value={amount}
  placeholder='Enter Amount'
  onChange={(e)=>setAmount(e.target.value)} />
  <br />
  <button onClick={handleIncAmountClick}>Inc byu Amounr</button>
  </div>
  )
}
// Steps:
// Create store
// Wrap app component with provider and pass the store
// Create a slice (reducer + actions)
// Register reducer in store
export default App
