import "./Jbl.css"
import JBl from "../assets/JBLSpeaker.png"
function Jbl(){
     return(
      <div className="JBlContainer"> 
      <div>
      <h3 className="CatText">
          Categories
      </h3>
      
           <p className="enhanceText">enhance your</p>
           <p className="enhanceText">music experience</p>
           <div className="enhance">
           <p className="roundedText">
             23
             <span  className="time">days</span>
           </p>
          
           <p className="roundedText">
             05
             <span className="time">hours</span>
           </p>
          
           <p className="roundedText">
             59
             <span  className="time">minutes</span>
           </p>
       </div>
        <button className="buy">
         buy now
        </button>
      </div>
        <img src={JBl} alt="" className="JBlIMG"/>
   </div>
     )
     
}export default Jbl;