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
           </div>   
         </div>
     )
}export default Footer