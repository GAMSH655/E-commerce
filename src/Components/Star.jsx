import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
const Star = ({maxRating = 5}) => {
    const containerStyle ={
        display:"flex",
        alignItems:"center",
        gap:"16px",
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
            return <div style={starContainerStyle} key={i}>
                <FaStar key={i} onClick={()=>setStar(i + 1)}
                style={{ color :i < star ?  "FFAD33" : ""}}
                // {   i > star ? " bad market 😒🥗" : " good market"}
                />
            </div>
        })
       }
           <p>({star || "" })</p>
    </div>
  )
}

export default Star