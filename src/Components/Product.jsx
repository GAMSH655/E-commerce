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
import Star from "../Components/Star"
import { useContext } from "react"
function Product(){
    const ProductArray = [
        {id:1,
        producImg: Dogfood ,
        productName: "Breed Dry Dog Food",
        productPrice : 450
        },
        {id:2,
        producImg: Camera ,
        productName: "CANON EOS DSLR Camera",
        productPrice : 360   
        },
        {id:3,
        producImg: Gaminglaptop,
        productName: "ASUS FHD Gaming Laptop",
        productPrice : 360   
        },
        {id:4,
        producImg: Jacket,
        productName: "Quilted Satin Jacket",
        productPrice : 960   
        },
        { id:5,
        producImg: Cream,
        productName: "Curology Product Set ",
        productPrice : 760   
        },
        { id:6,
        producImg: Benz,
        productName:" Kids Electric Car" ,
        productPrice : 660   
        },
        {id:7,
        producImg: Boot,
        productName:" Jr.Zoom Soccer Cleats" ,
        productPrice : 400   
        },
        {id:8,
        producImg: Gamepad,
        productName:"" ,
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
            ProductArray.map((productList , index)=>{
                return(
                    <div className="productCont" key={index} > 
                     {/* key={productList.id} */}
                        <img src={productList.producImg} alt="" className="productImg" />
                        <p className="productName">{productList.productName}</p>
                        <p> 
                            <span className="initialPrice"><FaDollarSign/> {productList.productPrice}</span>
                        </p>
                        <Star/>

                            <span className="eyeCont">
                            <FaEye/> <br />
                            <FaHeart/>
                            </span>
                    </div>
                )
            })
         }
        </div>
       </div>
    </div>
}export default Product;
