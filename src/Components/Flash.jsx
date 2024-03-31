import "./Flash.css"
import Tv from "../assets/Tv.png"
import Game from "../assets/Gamepad.png"
import Keyboard from "../assets/Keyboard.png"
import Chair from "../assets/Chair.png"
function Flash(){
    const Items = [
       { id :1,
          img: "./assets/Gamepad.png",
          itemTag : "HAVIT HV-G92 Gamepad"
       },
       {  id :2,
          img: "../assets/Keyboard.png",
          itemTag : "AK-900 Wired Keyboard"
       },
       { id :3,
          img:"../assets/Tv.png",
          itemTag : "IPS LCD Gaming Monitor"
       },
       {  id :4,
          img:"../assets/Chair.png",
          itemTag : "S-Series Comfort Chair "
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
                {
                   Items.map((goodd)=>{
                     return(
                        <div>
                            <img src={goodd.img} alt="" />
                            <p>{goodd.itemTag}</p>
                        </div>
                     )
                   })
                }
              </div>
     )
}export default Flash