import { Children, createContext, useContext, useState } from "react"

const MyContext = createContext()
 export const productContext = ()=> useContext(MyContext)

const ProductContext = ({children}) => {
    const [cart , setCart ] = useState([

    ])
  return (
    <MyContext.Provider value={{cart , setCart}}>
        {children}
    </MyContext.Provider>
  )
}

export default ProductContext