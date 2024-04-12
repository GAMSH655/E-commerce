import React from 'react'
import Header from "../Components/Header"
import "../Components/Error.css"
const Error = () => {
  return (
    <div>
      <Header/>
        <h3 className="errorTExt">
           404 not found
        </h3>
        <p className="err">
        Your visited page not found. You may go home page.
        </p>
        <button className="rrBTn">

        </button>
      </div>
  )
}

export default Error