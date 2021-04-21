/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, {useState} from 'react';

function Playground(props) {
  //destructured array
  const [count, setCount] = useState(0)
  const [isOn, setOn] = useState(false)
  const [hand, setHand] = useState('Choose your fighter')

  const onBulb =  <img alt = 'on-bulb' width = '100px' src ='https://tk-assets.lambdaschool.com/782b4acd-8006-4578-8f88-133c7f2b2220_lit-bulb.png'></img>
  const offBulb = <img alt ='off-bulb' width = '100px' src = 'https://tk-assets.lambdaschool.com/0a42bf4e-9454-49a1-b70d-325ba6368fe5_dark-bulb.png'></img>
  return (
    <div className = 'container'>
      <h1>Counter</h1>
      <div>Current count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
      <h3>Light Bulb</h3>
      {isOn ? onBulb : offBulb}
      <button onClick = {() => setOn(!isOn)}>Light Switch</button>

      <h3>Rock, Paper, Scissors</h3>
      <div>Current hand: {hand}</div>
      <button onClick = {() => setHand('Rock')}>Rock</button>
      <button onClick = {() => setHand('Paper')}>Paper</button>
      <button onClick = {() => setHand('Scissors')}>Scissors</button>
    </div>
    
  )
}

export default Playground;