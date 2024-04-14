import "./Flash.css"
import Tv from "../assets/Tv.png"
import Game from "../assets/Gamepad.png"
import Keyboard from "../assets/Keyboard.png"
import Chair from "../assets/Chair.png"
import {FaHeart} from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import Star from "../Components/Star"
function Flash(){
    const Items = [
       { id :1,
          img:Game,
          itemTag : "HAVIT HV-G92 Gamepad",
          itemPrice: 120 
       },
       {  id :2,
          img: Keyboard,
          itemTag : "AK-900 Wired Keyboard",
          itemPrice: 180 
       },
       { id :3,
          img:Tv,
          itemTag : "IPS LCD Gaming Monitor",
          itemPrice: 500
       },
       {  id :4,
          img:Chair,
          itemTag : "S-Series Comfort Chair ",
          itemPrice: 600
       },
      ]
   
     return (
              <div>
                 <p className="day">today's</p>
                 <div className="flashcontainer">
                 <p className="flash">flash sales</p>
                 <div className="timeContainer">
                 <p className="time">days <span className="span">03 :</span></p>
                 <p className="time">hours <span className="span">23 :</span></p>
                 <p className="time">minutes<span className="span">19 :</span></p>
                 <p className="time">seconds <span className="span">56 </span></p>
                 </div>
                 <div className="arrowContainer">
                    <button className="arrow"><i className="fa-solid fa-arrow-left "></i></button>
                    <button className="arrow"><i className="fa-solid fa-arrow-right "></i></button>
                 </div>
                 </div>
               <div className="mm">
               {
                   Items.map((goodd , index)=>{
                     return(<div key={index} className="eachItem">
                         <img src={goodd.img} alt=""  className="goodImg"/>
                            <p className="tagName">{goodd.itemTag}</p>
                            <p className="tagName">${goodd.itemPrice} </p>
                            <div className="innerEye">
                             <p><FaHeart className="ic"/></p>  
                              <p> <FaEye className="ic" /></p>
                              <p className="percenTage">40%</p>
                            </div>
                             <Star/>
                             <button className="buy">add to cart</button>
                        </div>
                     )
                   })
                }
               </div>
                 <div className="btnView">
                   <button className="view">view products</button>
                 </div>
              </div>
     )
}export default Flash