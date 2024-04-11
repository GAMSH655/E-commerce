import "../Components/Contact.css"
import Header from "../Components/Header"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
function Contact(){
     return(
        <div>
           <Header/>
           <h3 className="contLink">home /contact</h3>
           <div className="GridContainer">
             <div className="gridCont1">
               <div className="underLinediv">
               <p className="call">
              <span className="mobile"> 
              <FaPhone />
               </span> call to us
              </p>
              <p className="available">
                we are available 24/7 , 7 days a week 
                <span className="phoneNumber">
                Phone: +8801611112222
                </span>
              </p>
               </div>

               <p className="envlope">
                  <span className="envIcon">
                       <FaEnvelope/> 
                  </span>
                  Write To US
                 </p>
                 <p className="fill">
                 Fill out our form and we will contact you within 24 hours.
                 </p>
                 <p className="email">
                 Emails: customer@exclusive.com
                 </p>
             </div>
             <div className="gridCont2">
               <input type="text"  placeholder="your name" className="contactInput"/>
               <input type="email"  placeholder="your mail"  className="contactInput"/>
               <input type="number"  placeholder="your number"  className="contactInput"/>
              <textarea placeholder="enter your message here"></textarea>
             </div>
           </div>
        </div>
     )
}export default Contact 