import React from 'react'
import Header from "../Components/Header"
const Billing = () => {
  return (
    <div>
        <Header />

        <h3 className="billinDetails">billing detail </h3>
        <div className="billingFormContainer">
             <form action="">
                <h3 className="firstNAme">first name</h3>
                <input type="text" />
                <h3 className="comapnayName">company name</h3>
                <input type="text" />
                <h3 className="street">company name</h3>
                <input type="text" />
                <h3>town / city</h3>
                <select name="town" id="cars">
                    <option value="abia">abia</option>
                    <option value="umaya">umaya</option>
                    <option value="lagos">lago</option>
                    <option value="abuja">abuja</option>
                </select>
               <h3 className='phone'>phone number</h3>
               <input type="number" />
               <h3 className='phone'>email address</h3>
               <input type="email" />
             </form>
        </div>
        </div>
  )
}

export default Billing