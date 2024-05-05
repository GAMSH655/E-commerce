import  "../Components/Sign.css"
import Header from "../Components/Header"
import LoginImg from "../assets/CartPhone.png"
import Footer from "../Components/Footer"
import Google from "../assets/Google.png"
import { NavLink } from "react-router-dom"

function SignIN(){
     return(
          <div>
             <Header />
         
        <div className="formParent">
         <img src={LoginImg} alt=""  className="imglog"/>
         <div className="formCont">
           <h3 className= "UpperText">Create an account</h3>
            <p className= "enter"> Enter your details below </p>
            <div className="form">
            <form action="">
                <input type="text" placeholder="name" className="log" />
                <br />
                <input type="mail" placeholder="email or phone number" className="log"  />
                <br />
                <input type="password" placeholder="password" className="log"  />
                <br />
                <button className= "blog">create account</button>
                <button className="Google" >
                    <img src={Google} alt="" className= "Imgg"/>
                    create account</button>
             </form>
            </div>
             <p className="already">already have an account ?  
               
            <NavLink to="/login">log in</NavLink>
             
             </p>
         </div>
        </div>
        <Footer />
          </div>

     )
}export default SignIN;