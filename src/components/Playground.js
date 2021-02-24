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

import React, { useState } from 'react';

const Playground = props => {
  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(false)

  if (spinnerOn) {
    return (
      <div className="container">
        <p>...loading</p>
        <button onClick={() => setSpinnerOn(!spinnerOn)}>toggle spinner</button>
      </div>
    )
  }

  return (
    <div className="container">
      <h2>React Playground for Web{props.cohort}</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>toggle spinner</button>
    </div>
  )
}

export default Playground;