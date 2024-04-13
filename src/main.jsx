import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Star from "../src/Components/Star.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Star/>
    <Star maxRating = {10} />
    <Star maxRating = {5} />
  </React.StrictMode>,
)
