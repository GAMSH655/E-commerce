import "./Header.css"
import { NavLink } from "react-router-dom"
function Header(){
    return(
         <div className="Header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <h3 className="logoText">exclusive</h3>
            <div className="Navcontainer">
                 <NavLink to ="/" className="Link" >home</NavLink>
                  <NavLink to="/contact" className="Link">Contact</NavLink>
                  <NavLink to="/about" className="Link">About</NavLink>
                  <NavLink to="/login" className="Link">Sign up</NavLink>
            </div>
             <div className="searchContainer">
              <span>
              <input type="" placeholder="what are looking for " className="input"/><i className="fa-solid fa-magnifying-glass "></i>
              </span>
             <i className="fa-solid fa-heart"></i>
             <i className="fa-solid fa-cart-shopping"></i>
             </div>
         </div>
    )
}export default Header