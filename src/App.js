import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, input} from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch ();
  const [number, setNumber] = useState('')

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => {dispatch(increment())}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(input(number))}}>
          <input type='text' name='number' onChange={(e) => setNumber(e.target.value) }></input>
          <button type='submit'>submit</button>
      </form>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
      
    </div>
  );
}

export default App;
