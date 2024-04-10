import "./Newarrival.css"
import Perfume from "../assets/Perfume.png"
import psp from "../assets/Ps5.png"
import Speaker from "../assets/Speaker.png"
import Hatewoman from"../assets/Hatwoman.png"
import Sack from "../assets/Sack.png"
import Dollar from "../assets/Dol.png"
import Headphone from "../assets/Headphone.png"
import House from "../assets/House.png"
import Bus from "../assets/Bus.png"
import Mark from "../assets/Mark.png"
function Newarrival(){
    return(
        <div >
               <div className="flexParentContainer">
            <h3 className="featured">featured</h3>
            <h3 className="newArrival">new arrival </h3>
              <div  className="flexContainer">
                    
                    <div className="flexBox1">
                        <img src={psp} alt=""  className="ps"/>
                        <h3 className="prodName">play station 5</h3>
                        <p className="productDesc">Black and White version of the PS5 coming out on sale.</p>
                        <p className="shop">shop now</p>
                    </div>


                    <div className="flexme">
                   
                    <div className="flexBox2">
                    <img src={Hatewoman} alt="" className="ps"/>
                    <h3 className="prodName">women's collection</h3>
                        <p className="productDesc">Black and White version of the PS5 coming out on sale.</p>
                        <p className="shop">shop now</p>
                    </div>
                    
                    <div className="innerFlexContainer">
                   <div className="flexBox3">
                           <img src={Speaker} alt="" />
                           <h3 className="prodName">speaker</h3>
                       <p className="productDesc">Black and White version of the PS5 coming out on sale.</p>
                       <p className="shop">shop now</p>
                   </div>
                  
                   <div className="flexBox4">
                         <img src={Perfume} alt="" />
                         <h3 className="prodName">Perfume</h3>
                       <p className="productDesc">Black and White version of the PS5 coming out on sale.</p>
                       <p className="shop">shop now</p>
                   </div>
                   </div>
                    
                    </div>
                   
                   
              </div>
         </div>
         <div className="iconCont">
                <div className="box1">
                      <img src={Bus} alt="" />
                      <p className="iconTExt">
                         fast and free delivery
                      </p>
                      <p className="txt">Free delivery for all orders over $140</p>
                </div>
                <div className="box1">
                      <img src={Headphone} alt="" />
                      <p className="iconTExt">
                      fast and free delivery
                      </p>
                      <p className="txt">
                      Friendly 24/7 customer support
                      </p>
                </div>
                <div className="box1">
                      <img src={Mark} alt="" />
                      <p className="iconTExt">
                      fast and free delivery
                      </p>
                      <p className="txt">
                      We return money within 30 days
                      </p>
                </div>
            </div>
        </div>
    )
}export default Newarrival