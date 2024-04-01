import LoginStyle from "../Components/LoginIn.module.css"
import Header from "../Components/Header"
import LoginImg from "../assets/CartPhone.png"
import Footer from "../Components/Footer"
import { NavLink } from "react-router-dom"

function SignIN(){
     return(
          <div>
             <Header />
         
        <div className={LoginStyle.formParent}>
         <img src={LoginImg} alt="" />
         <div className={LoginStyle.formCont}>
           <h3 className={LoginStyle.UpperText}>Log in to Exclusive</h3>
            <p className={LoginStyle.enter}> Enter your details below </p>
             <form action="">
                <input type="mail" placeholder="email or phone number" className={LoginStyle.log}  />
                <input type="password" placeholder="password" className={LoginStyle.log}  />
               <div className={LoginStyle.pss}>
                    <button className= {LoginStyle.btn} >log in</button>
                    <p  className= {LoginStyle.fgtp} >forget password ?</p>
               </div>
             </form>
             <p className={LoginStyle.already}>already have an account ?  
               
            <NavLink to="/login">log in</NavLink>
             
             </p>
         </div>
        </div>
        <Footer />
          </div>

     )
}export default SignIN;