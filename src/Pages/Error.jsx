import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../Components/Error.css"
const Error = () => {
  return (
    <div>
      <Header/>
      <div className="errorTExtbox">
      <h3 className="errorTExt">
      😒  404 not found🗑🗑😒
        </h3>
        <p className="err">
        Your visited page not found. You may go home page.
        </p>
        <button className="rrBTn">

        </button>
      </div>
       <Footer/>
      </div>
  )
}

export default Error