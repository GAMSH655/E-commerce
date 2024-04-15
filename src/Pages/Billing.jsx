import React from 'react'
import Header from "../Components/Header"
import "../Components/BIlling.css"
import Gamepad from "../assets/Gamepad.png"
import Tv from "../assets/Tv.png"
import BankCard from "../assets/BankCard.png"
const Billing = () => {
  return (
    <div>
        <Header />
        <h3 className="billinDetails">billing detail </h3>
         <div className="parentBillingContainer">
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
           <div className='sidContainer'>
           <div className="billingProduct">
                <img src={Gamepad} alt="" className='gm' />
                <h3 className="pName">Gaming pad</h3>
                <h3 className="priceBill">$400</h3>
            </div>
            <div className="billingProduct">
                <img src={Tv} alt="" className='gm' />
                <h3 className="pName">led tv</h3>
                <h3 className="priceBill">$400</h3>
            </div>
        <div className="billingDetails">
        <div className="amountCont">
            <div className="subt">
                 <p className="sub">subtotal:</p>
                 <p className="sub">$800</p>
            </div>
            <div className="shippingCont">
            <p className="shipping">shipping</p>
            <p className="sub">free</p>
            </div>
            <div className="shippingCont">
            <div>
            <input type="radio"className='radio' />
             <label htmlFor="bank" > bank</label>
            </div>
            <img src={BankCard} alt="" />
            </div>
            <input type="radio"className='rad'/>
             <label htmlFor="cash on delivery" >cash on delivery
             </label>
        </div>
         <div className='coupCont'>
             <div className='couponDiv'>coupon code</div>
             <button className='applyCoupon'>apply coupon</button>
         </div>
         <button className='applyCoupon'>place order</button>
        </div>
           </div>
         </div>
        </div>
  )
}

export default Billing