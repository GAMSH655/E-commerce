import "../Components/Contact.css"
import Header from "../Components/Header"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import Footer from "../Components/Footer"
import { useState , useEffect } from "react"
function Contact(){
  const [formValues , setformValueValues] = useState({
    name:"",
    mail: "",
    number: "",
    textarea: ""
  });
  const [formErrors , setformErrors] = useState({ })
  const [submmit , setIsSumbit] = useState(false )
  
  const handleInput = (e) =>{
   const {name , value} = e.target
   setformValueValues({...formValues , [name]:value});
   console.log(formValues);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
      setformErrors(Validate(formValues));
      setIsSumbit(true)
  }
   useEffect(()=>{
    console.log(formErrors)
     if (Object.keys(formErrors).length ===  0 && submmit) {
      console.log(formValues)
     }
   } , [formErrors])
    const Validate = (value) =>{
      const Errors = {};
      const REgex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
      if (!value.name){
        Errors.name = "name expected"
      }
      if (!value.mail){
        Errors.mail = " mail is required expected"
      };
      if (!value.number){
        Errors.number = " number is expected"
      };
      if (!value.textarea){
        Errors.textarea = "textarea is  expected"
      };
      return Errors;
    } 
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
               <form action="" onSubmit={handleSubmit} >
               {Object.keys(formErrors).length ===  0 && submmit ? <div className="sucDiv"> log in successfull ✔✔ </div> : ""}
               <input type="text"  placeholder="your name" className="contactInput" onChange={handleInput} name="name" value={formValues.name}/>
               <p className="error">{formErrors.name}</p>
               <input type="mail"  placeholder="your mail"  className="contactInput"  onChange={handleInput}  name="mail" value={formValues.mail}/>
               <p className="error">{formErrors.mail}</p>
               <input type="number"  placeholder="your number"  className="contactInput"  onChange={handleInput}  name="number" value={formValues.number}/>
               <p className="error">{formErrors.number}</p>
              <textarea placeholder="enter your message here" onChange={handleInput} value={formValues.textarea} name="textarea" ></textarea>
              <p className="error">{formErrors.textarea}</p>
              <button className="sendMEssageBTn"> send message</button>
              </form>
             </div>
           </div>
            <Footer/>
        </div>
     )
}export default Contact 