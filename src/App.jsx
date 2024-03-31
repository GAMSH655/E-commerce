import { useState } from 'react'
import Home from "../src/Pages/Home"
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Login from './Pages/Login'


function App() {

  return (
    <>
         <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/login' element={ <Login />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
