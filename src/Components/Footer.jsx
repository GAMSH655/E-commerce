import FooterStyle from "../Components/Footer.module.css"
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
           </div>   
         </div>
     )
}export default Footer