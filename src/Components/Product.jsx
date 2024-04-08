import "./Product.css"
import Curology from "../assets/Cream.png"
import Camera from "../assets/Camera.png"
import Gaminglaptop from "../assets/Gaminglaptop.png"
import Dogfood from "../assets/Dogfood.png"
import { FaStar } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"
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
        }
    ]
    return <div>
         <h3 className="ourProducts">
            our product
         </h3>
         <h3 className="exploreProducts">
             explore products
         </h3>
         {
            ProductArray.map((productList)=>{
                return(
                    <div>
                        <img src={productList.producImg} alt="" />
                        <p>{productList.productName}</p>
                        <p> <FaDollarSign/>      {productList.productPrice}</p>
                        <div>
                            {productList.productRating}
                        </div>
                    </div>
                )
            })
         }
    </div>
}export default Product;
