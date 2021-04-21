import React from 'react'
import { render } from 'react-dom'
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
  const happy = true;
  return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      {/* use {} brackets to add a js script to the JSX */}
      {happy ? <div>I am having a great day!</div> : <div> Having a bady day!</div>}
      <Playground></Playground>
    </div>
  )
}


//THIS IS JSX
const h1 = <h1>Welcome WebPT28</h1>


//ReactDom.render method renders our react app on the DOM
render(
  <App cohort='PT28' />,
  document.querySelector('#root')
)
