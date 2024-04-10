import "./Header.css"
import { NavLink } from "react-router-dom"
import { FaHome  , FaPhone , FaUser ,FaFile  , FaTimes} from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import { useState } from "react"

function Header(){
    const [isOpen , setIsOpen] = useState(true)

    function handClick(){
        setIsOpen(!isOpen)
    }
    
    return(
            <div>
            <div className="Header">
            <h3 className="logoText">exclusive</h3>
            <div className="Navcontainer">
                 <NavLink to ="/" className="Link" >home</NavLink>
                  <NavLink to="/contact" className="Link">Contact</NavLink >
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
             {/* mobileHeader */}
         <div className="MobileHeader">
            <h3 className="MoblogoText">exclusive</h3>
            <span>
              <input type="" placeholder="what are looking for " className="Mobinput"/><i className="fa-solid fa-magnifying-glass "></i>
              </span>
            <button className="openBtn" onClick={handClick}>
                {isOpen ? <FaTimes/> :  <FaBars/>}
                </button>
         </div>
            { isOpen && (
                         <div className="MobileNavcontainer">
                         <div className="searchContainer">
                             <i className="fa-solid fa-heart"></i>
                             <i className="fa-solid fa-cart-shopping"></i>
                             </div>
                                 <NavLink to ="/" className="MobileLink" >home <FaHome className="mobIcon"/> </NavLink>
                                  <NavLink to="/contact" className="MobileLink">Contact<FaPhone  className="mobIcon"/> </NavLink>
                                  <NavLink to="/about" className="MobileLink">About<FaUser  className="mobIcon"/> </NavLink>
                                  <NavLink to="/sign" className="MobileLink">Sign up <FaFile  className="mobIcon" /></NavLink>
                            </div> 
             )}
            </div>
    )
}export default Header