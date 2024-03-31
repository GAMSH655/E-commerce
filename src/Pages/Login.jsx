import LoginStyle from "../Components/Login.module.css"
import Header from "../Components/Header"
import LoginImg from "../assets/CartPhone.png"
import Footer from "../Components/Footer"
import Google from "../assets/Google.png"
import { NavLink } from "react-router-dom"

function Login(){
     return(
          <div>
             <Header />
         
        <div className={LoginStyle.formParent}>
         <img src={LoginImg} alt="" />
         <div className={LoginStyle.formCont}>
           <h3 className={LoginStyle.UpperText}>Create an account</h3>
            <p className={LoginStyle.enter}> Enter your details below </p>
             <form action="">
                <input type="text" placeholder="name" className={LoginStyle.log} />
                <input type="mail" placeholder="email or phone number" className={LoginStyle.log}  />
                <input type="password" placeholder="password" className={LoginStyle.log}  />
                <button className={LoginStyle.blog} >create account</button>
                <button className={LoginStyle.Google} >
                    <img src={Google} alt="" className=  {LoginStyle.Imgg}/>
                    create account</button>
             </form>
             <p className={LoginStyle.already}>already have an account ?  
               
            <NavLink to="/login">log in</NavLink>
             
             </p>
         </div>
        </div>
        <Footer />
          </div>

     )
}export default Login;