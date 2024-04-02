import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Components/About.css"
import Ladies from "../assets/Twoladies.png"
import Sack from "../assets/Sack.png"
import Dollar from "../assets/Dol.png"
import Headphone from "../assets/Headphone.png"
import House from "../assets/House.png"
import Will from "../assets/Willy.png"
import Emma from "../assets/Emma.png"
import Tom from "../assets/Tom.png"
import Bus from "../assets/Bus.png"
import Mark from "../assets/Mark.png"

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
                     <img src= {Headphone} alt="" />
                     <h3 className="boldText">
                         24/7 customer service
                     </h3>
                     <p className="infotext">
                     Friendly 24/7 customer support
                     </p>
                 </div>
                 <div className="div1">
                     <img src= {House} alt="" />
                     <h3 className="boldText">
                        10.5k
                     </h3>
                     <p className="infotext">
                     Sallers active our site
                     </p>
                 </div>
                 <div className="div1">
                     <img src= {Dollar} alt="" />
                     <h3 className="boldText">
                      33k
                     </h3>
                     <p className="infotext">
                     Monthly Produduct Sale
                     </p>
                 </div>
                 <div className="div1">
                     <img src= {Sack} alt="" />
                     <h3 className="boldText">
                      25k
                     </h3>
                     <p className="infotext">
                     Anual gross sale in our site
                     </p>
                 </div>
             </div>

             <div className="peopleContainer">
                 <div className="boxPerson1">
                    <img src={Tom} alt="" id="imgt" />
                    <p className="name">
                         Tom cruise
                    </p>
                    <p className="title">
                         Founder and chairman
                    </p>
                    <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
                 </div>
                 <div className="boxPerson1">
                    <img src={Emma} alt=""   id="imgt"/>
                    <p className="name">
                         Emma watson
                    </p>
                    <p className="title">
                        managing director
                    </p>
                    <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
                 </div>
                 <div className="boxPerson1">
                    <img src={Will} alt=""   id="imgt"/>
                    <p className="name">
                      product designer
                    </p>
                    <p className="title">
                        managing director
                    </p>
                    <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
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
            <Footer />
         </div>
     )
}export default About