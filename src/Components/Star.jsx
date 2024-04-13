import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
const Star = ({maxRating = 5}) => {
    const containerStyle ={
        display:"flex",
        alignItems:"center",
        gap:"16px",
        backgroundColor:"red"
    }
    const starContainerStyle ={
        display:"flex",
        alignItems:"center",
        gap:"16px",
    }
     const [star , setStar] = useState(0)
  return (
    <div style={ containerStyle}>
       {
        Array.from({length:maxRating}, (_ , i)=>{
            return <div style={starContainerStyle}>
                <FaStar/>
            </div>
        })
       }
           <p>(10)</p>
    </div>
  )
}

export default Star