import "../Components/Login.css"
import Header from "../Components/Header"
import LoginImg from "../assets/CartPhone.png"
import Footer from "../Components/Footer"
import { NavLink } from "react-router-dom"

function SignIN(){
     return(
          <div>
             <Header />
         
        <div className="formParent">
         <img src={LoginImg} className="imglog"/>
         <div className="formCont">
           <h3 className="UpperText">Log in to Exclusive</h3>
            <p className="enter"> Enter your details below </p>
             <form action="">
                <input type="mail" placeholder="email or phone number" className="log"  />
                <input type="password" placeholder="password" className="log"   />
               <div className= "pss">
                    <button className="Google" >log in</button>
                    <p  className="fgtp" >forget password ?</p>
               </div>
             </form>
             <p className="already">already have an account ?  
               
            <NavLink to="/login">log in</NavLink>
             
             </p>
         </div>
        </div>
        <Footer />
          </div>

     )
}export default SignIN;