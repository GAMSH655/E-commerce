import FooterStyle from "../Components/Footer.module.css"
import { NavLink } from "react-router-dom"
import Bar from "../assets/Bar.png"
function Footer(){
     return(
         <div>
           <div className={FooterStyle.footerContainer}>
              {/* start of first container */}
            <div className={FooterStyle.firstcont}>
                <h3 className={FooterStyle.exclusive}>
                    exclusive
                </h3>
                <p className={FooterStyle.sub}>
                    suscribe
                </p>
                <p className={FooterStyle.get}>
                  get 10%
                </p>
                <input type="email" className={FooterStyle.FooterInpt} 
                placeholder="enter your email"/>
            </div> 
            {/* end of first container */}

             {/* start of secon container */}
              <div className={FooterStyle.secondCont} >
                <h3  className={FooterStyle.supp}>
                    support
                </h3>
            <p className={FooterStyle.add}>111 shomolu bajulaiye</p>
                <p className={FooterStyle.add}>lagos nigeria</p>
                <p className={FooterStyle.add}>shittuabdquadri0@gmail.com</p>
                <p className={FooterStyle.add}>07046309225</p>
              </div>
                {/* end of first container */}

                  {/* start of third container */}
                 <div  className={FooterStyle.thircCont} >
                     <h3  className={FooterStyle.acc}>
                        account
                     </h3>
                    <NavLink to="/myaccount"  className= {FooterStyle.FotterLink}>my account</NavLink>
                    <NavLink to="/login"  className= {FooterStyle.FotterLink}>Login/register</NavLink>
                    <NavLink to="/cart"  className= {FooterStyle.FotterLink}>cart</NavLink>
                    <NavLink to="/wishlist" className= {FooterStyle.FotterLink}>wishlist</NavLink>
                    <NavLink to="/shop" className= {FooterStyle.FotterLink}>shop</NavLink>
                 </div> 
                   <div className={FooterStyle.fourthCont} >
                   <h3  className={FooterStyle.quick}>
                       quick links
                     </h3>
                     <p className={FooterStyle.q}>privacy and policy</p>
                     <p className={FooterStyle.q}>terms of use</p>
                     <p className={FooterStyle.q}>FAQ</p>
                     <p className={FooterStyle.q}>contact</p>
                   </div>
                   <div className={FooterStyle.FifthSec}>
                    <h3 className={FooterStyle.download}>
                      download app
                    </h3>
                  <p className= {FooterStyle.save}>
                  Save $3 with App New User Only
                  </p>
                  <img src={Bar} alt="" />
                      <div className={FooterStyle.me}>
                        <p className={FooterStyle.icon}> <i className="fa-brands fa-facebook"></i></p>
                        <p className={FooterStyle.icon}> <i className="fa-brands fa-github"></i></p>
                        <p className={FooterStyle.icon}> <i className="fa-brands fa-twitter"></i></p>
                        <p className={FooterStyle.icon}><i className="fa-brands fa-instagram"></i></p>
                      </div>
                   </div>
           </div>   
         </div>
     )
}export default Footer