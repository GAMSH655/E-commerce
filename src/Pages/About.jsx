import Header from "../Components/Header";
import "../Components/About.css"
import Ladies from "../assets/Twoladies.png"
import Sack from "../assets/Sack.png"
import Dollar from "../assets/dollar.png"
import Headphone from "../assets/Headphone.png"
import House from "../assets/House.png"

function About(){
     return(
         <div>
             <Header />
             <div className="AboutConnt">
                 <div className="aboutText">
                    <h3 className="upAbt">
                         our story
                    </h3>
                     <p className="abText">
                     Our Story
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                     </p>
                 </div>
                  <img src={Ladies} alt=""  className="woman"/>
             </div>
             <div className="midleContainer">
                 <div className="div1">
                     i
                 </div>
             </div>
         </div>
     )
}export default About