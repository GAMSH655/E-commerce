import "./Header.css"
import { NavLink } from "react-router-dom"
function Header(){
    return(
         <div className="Header">
            <h3 className="logoText">exclusive</h3>
            <div className="Navcontainer">
                 <NavLink to ="/" className="Link" >home</NavLink>
                  <NavLink to="/contact" className="Link">Contact</NavLink>
                  <NavLink to="/about" className="Link">About</NavLink>
                  <NavLink to="/sign" className="Link">Sign up</NavLink>
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