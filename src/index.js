import React from 'react'
import ReactDOM from 'react-dom'

import Playground from './components/Playground'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <h2>My name is {props.name}</h2>
      <h3>Unit {props.unit}</h3>
      <p>Today is {props.today}</p>
      {props.happy ? <p>We are doing good today!</p> : <p>Not a good day today.</p>}
      <Playground cohort={props.cohort}/>
    </div>
  )
}

ReactDOM.render(
  /* const props = { 
       cohort: 'PT26',
       today: 'Tuesday',
       unit: '2',
       name: 'Ben',
       happy: true
     } 
  
  */
  <App cohort='PT27' today={Date.now()} unit='2' name="Ben" happy />,
  document.querySelector('#root')
)
