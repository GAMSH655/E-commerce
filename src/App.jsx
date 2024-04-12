import { useState } from 'react'
import Home from "../src/Pages/Home"
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import SignIN from "../src/Pages/Sign"
import LogIn from "../src/Pages/Login"
import About from "../src/Pages/About"
import Contact from "../src/Pages/Contact"
import Error from "../src/Pages/Error"
function App() {

  return (
    <>
         <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/Sign' element={ <SignIN/>} />
              <Route path='/Login' element={ <LogIn/>} />
              <Route path='/About' element={ <About/>} />
              <Route path='/Contact' element={ <Contact/>} />
              <Route path='*' element={ <Error/>} />
          </Routes>
        </BrowserRouter>
       
    </>
  )
}

export default App
