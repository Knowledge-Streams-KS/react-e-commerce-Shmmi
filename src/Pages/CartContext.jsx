import {createContext,useState } from "react";

const CartContext = createContext();
import React from 'react'

const CartContextProvider = ({children}) => {

const [items, setItems] = useState([])
  return (
    <div>
      <CartContext.Provider value={[items,setItems]}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider
export {CartContext};
