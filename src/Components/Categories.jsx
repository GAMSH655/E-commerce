import "./Categ.css"
import GucciBg from "../assets/GucciBg.png"
import Shelf from "../assets/Shelf.png"
import Woofer from "../assets/Woofer.png"
import  RedCoat from"../assets/RedCoat.png"
import { FaHeart } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"
function Categ(){
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
           CartRAte : <FaHeart />
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
                              <div>
                               <img src={cartItem.catImg}alt="" className="gm" />  
                               <p className="cartName"></p>{cartItem.catName}
                               <p className="cartPrice"> <FaDollarSign />
                                   {cartItem.cartPrice}
                               </p>
                              </div>
                         )
                     })
                }
            </div>
         </div>

    )
}export default Categ