import About from "./Components/About"

import Header from "./Components/Header"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import Privateroute from "./routes/Privateroute";
import Cart from "./Pages/Cart";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {


  return (
    
      <>
        <Header />
        <Routes>
          <Route path="/products/:categoryName?" element={<Products />} />
          <Route path="/productDetail/:detailId?" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Privateroute>
            <Cart/>
          </Privateroute>}></Route>
           <Route path="/signup" element={<Signup/>} /> 
           <Route path="/login" element={<Login/>} /> 
        </Routes>
        

      </>
    
  )
}

export default App
