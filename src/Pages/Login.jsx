import LoginStyle from "../Components/Login.module.css"
import Header from "../Components/Header"
import LoginImg from "../assets/CartPhone.png"

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
             </form>
         </div>
        </div>
          </div>
     )
}export default Login;