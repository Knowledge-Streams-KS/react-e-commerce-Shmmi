import React, { useContext } from 'react'

import { CartContext } from './CartContext'
const Cart = () => {
 
    const [items, setItems] = useContext(CartContext); 

  return (
    <div className='container'>
     {items.map((element,index)=>{
      return (
        <div className='data' key={index} >
        <h1>{element.title}</h1>
        <h4>{element.description}</h4> 
        <img className="image" src={element.image} alt="" />
        </div>      
      )
     })}
    </div>
  )
}

export default Cart;

// Cart component
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Cart = () => {
//   const [items, setItems] = useContext(CartContext); // Correctly destructured to get items from context

//   return (
//     <div>
//      {items.map((element, index) => {
//       return (
//         <div key={index}>
//           <h1>{element.title}</h1>
//           {/* You might want to display more information here, such as price, quantity, etc. */}
//         </div>
//       )
//      })}
//     </div>
//   );
// };

// export default Cart;

