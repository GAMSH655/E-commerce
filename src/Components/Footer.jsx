import FooterStyle from "../Components/Footer.module.css"
import { NavLink } from "react-router-dom"
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


           </div>   
         </div>
     )
}export default Footer