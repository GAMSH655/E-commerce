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
              <form action="" className="secondForm">
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
                 <h3 className="pass">pasword chanages</h3>
                 <input type="passowrd" className="passwordInput" placeholder="currentpassword"/> <br />
                 <input type="password" className="passwordInput" placeholder="new password" /> <br />
                 <input type="password" className="passwordInput"  placeholder="confirm new password"/>
                <button className="accoutBtn">save changes</button>
              </form>
           </div>
     </div>
    </div>
  )
}

export default Myacclount