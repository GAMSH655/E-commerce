import "./Header.css"
import { NavLink } from "react-router-dom"
import { FaHome  , FaPhone , FaUser ,FaFile  , FaTimes , FaShoppingBag ,FaSearch ,FaHeart} from "react-icons/fa"
import { FaBars } from "react-icons/fa"
import { useState } from "react"

function Header(){
    const [isOpen , setIsOpen] = useState(false)

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
              <input type="" placeholder="what are looking for " className="input"/><FaSearch className="searchIcon"/>
              </span>
             <FaHeart className="heart"/>
             <NavLink to="/cart"><FaShoppingBag/></NavLink>
             </div>
         </div>
             {/* mobileHeader */}
         <div className="MobileHeader">
            <h3 className="MoblogoText">exclusive</h3>
            <span>
              <input type="" placeholder="what are looking for " className="Mobinput"/>
              </span>
            <button className="openBtn" onClick={handClick}>
                {isOpen ? <FaTimes/> :  <FaBars/>}
                </button>
         </div>
            { isOpen && (
                         <div className="MobileNavcontainer">
                         <div className="searchContainer">
                           <FaHeart/>
                             <NavLink to="/cart"> <FaShoppingBag/>
                           </NavLink>
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