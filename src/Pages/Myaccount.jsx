import "../Components/Myaccount.css"
import Header from "../Components/Header"
import React from 'react'

const Myacclount = () => {
  return (
    <div>
        <Header />

     <div className="My_account_container">
           <div>
           <div className="accountDetailsContainer">
           <h3 className="manage">manage my account</h3>
             <p className="profile"> my profile</p>
             <p className="profile">address book </p>
             <p className="profile">my payment option</p>
           </div>
           <div className="accountDetailsContainer">
           <h3 className="manage">manage my account</h3>
             <p className="profile"> my profile</p>
             <p className="profile">address book </p>
             <p className="profile">my payment option</p>
           </div>
           <div className="accountDetailsContainer">
           <h3 className="manage">manage my account</h3>
             <p className="profile"> my profile</p>
             <p className="profile">address book </p>
             <p className="profile">my payment option</p>
           </div>
           </div>
           <div className="asideFormContainer">
             <h3 className="edit">
                 edit your profile
             </h3>
              <form action="">
                <div className="inputContainer">
                <div className="inp1">
                <h3 className="FName">last name</h3>
                <input type="text" className="FNameInnput" />
                </div>
                <div className="inp2">
                <h3 className="LName">last name</h3>
                <input type="text"  className="FNameInnput"/>
                </div>
                </div>
                <div className="inputContainer">
                <div className="inp1">
                <h3 className="FName">email</h3>
                <input type="email" className="FNameInnput" />
                </div>
                <div className="inp2">
                <h3 className="LName">address</h3>
                <input type="text"  className="FNameInnput"/>
                </div>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </form>
           </div>
     </div>
    </div>
  )
}

export default Myacclount