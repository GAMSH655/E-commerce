import SignStyle from "../Components/Login.module.css"
import Header from "../Components/Header"
import LoginImg from "../assets/CartPhone.png"
import Footer from "../Components/Footer"
import Google from "../assets/Google.png"
import { NavLink } from "react-router-dom"

function SignIN(){
     return(
          <div>
             <Header />
         
        <div className={SignStyle.formParent}>
         <img src={LoginImg} alt=""  className={SignStyle.LoginImg}/>
         <div className={SignStyle.formCont}>
           <h3 className={SignStyle.UpperText}>Create an account</h3>
            <p className={SignStyle.enter}> Enter your details below </p>
            <div className={SignStyle.form}>
            <form action="">
                <input type="text" placeholder="name" className={SignStyle.log} />
                <input type="mail" placeholder="email or phone number" className={SignStyle.log}  />
                <input type="password" placeholder="password" className={SignStyle.log}  />
                <button className={SignStyle.blog} >create account</button>
                <button className={SignStyle.Google} >
                    <img src={Google} alt="" className=  {SignStyle.Imgg}/>
                    create account</button>
             </form>
            </div>
             <p className={SignStyle.already}>already have an account ?  
               
            <NavLink to="/login">log in</NavLink>
             
             </p>
         </div>
        </div>
        <Footer />
          </div>

     )
}export default SignIN;