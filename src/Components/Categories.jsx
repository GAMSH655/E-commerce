import "./Categ.css"
import GucciBg from "../assets/GucciBg.png"
import Shelf from "../assets/Shelf.png"
import Woofer from "../assets/Woofer.png"
import  RedCoat from"../assets/RedCoat.png"
import { FaStar } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { useState } from "react"
function Categ(){
      const [active , setActive] = useState(false)
       const ToggleColor = () =>{
        setActive(!active)
       }

    const  catItem = [
         { id:1 ,
           catImg : GucciBg ,
           catName: "The north Coat",
           cartPrice : 620,
         },
         {id:2,
           catImg : Shelf ,
           catName: "small bookshelf",
           cartPrice : 840,
         },
         {
          id:3 ,
           catImg : Woofer ,
           catName: "RGB liquid CPU Cooler",
           cartPrice : 1200,
         },
         { id:4 ,
           catImg : GucciBg ,
           catName: "Gucci duffle bag",
           cartPrice : 1500,
         }
    ]
    return(
       
         <div>
            <h3 className="catText">Categories</h3>
            <div className="browseCont">
            <h3 className="browse">
                 browsse by Categories
                 </h3>
                 <div className="arrowContainer">
                    <button className="arrow"><i className="fa-solid fa-arrow-left "></i></button>
                    <button className="arrow"><i className="fa-solid fa-arrow-right "></i></button>
                 </div>
            </div>

            <div className="CartContainer">
                {
                     catItem.map((cartItem)=>{
                         return(
                              <div className="cartCont">
                               <img src={cartItem.catImg}alt="" className="gm" />  
                               <p className="cartName"> {cartItem.catName}</p>
                               <p className="cartPrice"> <FaDollarSign />
                                   {cartItem.cartPrice} <span className="oldPrice">($2000)</span>
                               </p>
                               <div className="rateIcon" >
                                <p    onClick={ToggleColor} > <FaStar className={`cartRate ${active ? "activeColor" : ""}`} /></p>
                                <p    onClick={ToggleColor} > <FaStar className={`cartRate ${active ? "activeColor" : ""}`} /></p>
                                <p    onClick={ToggleColor} > <FaStar className={`cartRate ${active ? "activeColor" : ""}`} /></p>
                                <p    onClick={ToggleColor} > <FaStar className={`cartRate ${active ? "activeColor" : ""}`} /></p>
                                <p    onClick={ToggleColor} > <FaStar className={`cartRate ${active ? "activeColor" : ""}`} /></p>
                               </div>
                               <span className="icons">
                               <p>  <FaEye/> </p>
                                <p> <FaHeart/> </p>
                               </span>
                              </div>
                         )
                     })
                }
            </div>
         </div>

    )
}export default Categ