import "./Hero.css"
import Iphone from "../assets/Iphone.png"
import NewPhone from "../assets/Newhone.png"
function Hero(){
     return (
         <div>
            <div className="heroParentContainer">
            <div className="textBox">
                <p className="heroText">woman's fashion</p>
                <p className="heroText">men fashion </p>
                <p className="heroText">electronics</p>
                <p className="heroText">home and lifestyle</p>
                <p className="heroText">medicine</p>
                <p className="heroText">sport & outdoor</p>
                <p className="heroText">baby's toy</p>
                <p className="heroText">groceries and pets</p>
                <p className="heroText">health & beauty</p>
            </div>
            <div className="heroImg">
                <div className="Herom">
                <p className="hero2">
                <i className="fa-brands fa-apple apple"></i>
                iphone 14 series
                </p>
                <p className="up">up to 10%</p>
                <p className="v">off voucher</p>
                    </div>
                 <img src={NewPhone} alt="" className="heroIphone" />
            </div>
            </div>
         </div>
     )
} export default Hero