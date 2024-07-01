import React from 'react'
import ReactDOM from 'react-dom/client'
import newApp from './newApp.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>here is the function</h1>
    <App />
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById("newRoot")).render(
  <>
  <h1>here is another one</h1>
  <newApp/>
  </>
)
