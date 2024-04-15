import React from 'react'
import Header from "../Components/Header"
import "../Components/Billing.css"
import Gamepad from "../assets/Gamepad.png"
const Billing = () => {
  return (
    <div>
        <Header />
        <h3 className="billinDetails">billing detail </h3>
        <div className="billingFormContainer">
             <form action="">
                <h3 className="name">first name</h3>
                <input type="text" className='billing_input' />
                <br />
                <h3 className="name">company name</h3>
                <input type="text" className='billing_input'  />
                <br />
                <h3 className="name">company name</h3>
                <input type="text" className='billing_input'  />
                <br />
                <h3 className="name">town / city</h3>
                <select name="town" id="cars" className='billing_input' >
                    <option value="abia">abia</option>
                    <option value="umaya">umaya</option>
                    <option value="lagos">lago</option>
                    <option value="abuja">abuja</option>
                </select>
               <h3 className="name">phone number</h3>
               <input type="number" className='billing_input' />
               <br />
               <h3 className="name">email address</h3>
               <input type="email"className='billing_input'  />
               <br />
               <input type="checkbox"className='radio' />
               <label htmlFor="Save this information for faster check-out next time" > Save this information for faster check-out next time</label>
             </form>
        </div>
            <div className="billingProduct">
                <img src={Gamepad} alt="" className='gm' />
                <h3 className="pName">GAming pad</h3>
                <h3 className="priceBill">$400</h3>
            </div>
        <div className="billingDetails">

        </div>
        </div>
  )
}

export default Billing