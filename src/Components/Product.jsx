import "./Product.css"
import Camera from "../assets/Camera.png"
import Gaminglaptop from "../assets/Gaminglaptop.png"
import Gamepad from "../assets/Gamepad.png"
import Dogfood from "../assets/Dogfood.png"
import Jacket from "../assets/Satin.png"
import Cream from "../assets/Cream.png"
import Boot from "../assets/Boot.png"
import Benz from "../assets/Benz.png"
import { FaStar } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
function Product(){
    const ProductArray = [
        {
        producImg: Dogfood ,
        productName: "Breed Dry Dog Food",
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 450
        },
        {
        producImg: Camera ,
        productName: "CANON EOS DSLR Camera",
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 360   
        },
        {
        producImg: Gaminglaptop,
        productName: "ASUS FHD Gaming Laptop",
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 360   
        },
        {
        producImg: Jacket,
        productName: "Quilted Satin Jacket",
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 960   
        },
        {
        producImg: Cream,
        productName: "Curology Product Set ",
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 760   
        },
        {
        producImg: Benz,
        productName:" Kids Electric Car" ,
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 660   
        },
        {
        producImg: Boot,
        productName:" Jr.Zoom Soccer Cleats" ,
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 400   
        },
        {
        producImg: Gamepad,
        productName:"" ,
        productRating : [ <FaStar/> , <FaStar/> ,<FaStar/> ,<FaStar/> , <FaStar/> ],
        productPrice : 400   
        }
    ]
    return <div>
         <h3 className="ourProducts">
            our product
         </h3>
         <h3 className="exploreProducts">
             explore products
         </h3>
       <div className="gridParentContainer">
       <div className="gridProduct">
        {
            ProductArray.map((productList)=>{
                return(
                    <div className="productCont">
                        <img src={productList.producImg} alt="" className="productImg" />
                        <p>{productList.productName}</p>
                        <p> <FaDollarSign/> {productList.productPrice}</p>
                        <div>
                            {productList.productRating}
                            <span className="eyeCont">
                               <p> <FaEye/></p>
                                <p><FaHeart/></p>
                            </span>
                        </div>
                    </div>
                )
            })
         }
        </div>
       </div>
    </div>
}export default Product;
