import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js" 
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// }
const anotherElement = (
  <a href="http:/google.com" target='_blank'>Visit Google</a>
)

const anotherUser = ' new user';

const reactElement = React.createElement( // react method by default injects by babel transpiler
  'a', // tag
  {href: 'https://google.com', target: '_blank',}, // attribute
  'click me to visit google', // children(text)
  anotherUser // evaluated expression where we inject variable
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // anotherElement
    // reactElement
    reactElement
  
)
