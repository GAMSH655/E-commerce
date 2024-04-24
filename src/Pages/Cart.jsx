import React from 'react'
import Header from '../Components/Header'
import { productContext } from '../Components/ProductContext';
import "../Components/Cart.css"
import Star from '../Components/Star';
const Cart = () => {
  
  const { cart } = productContext();
  console.log(cart);
  return (
    <div>
      <Header/>
       <div className='goodContainer'>
       {
        cart.map((carts, index)=>{
          return(
              <div className='cartCont'>
              <img src={carts.img} alt="" />
              <p className='cartP'> ${carts.itemPrice}</p>
              <p className='cName'>{carts.itemTag}</p>
               <Star/>
            </div>
          )
        })
      }
       </div>
      </div>
  )
}
export default Cart