import About from "./Components/About"
import Apidata from "./Components/Apidata"
// import Apidataaxi from "./Components/Apidataaxi"
import Header from "./Components/Header"
// import { Router,Route, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";

function App() {


  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/products/:categoryName?" element={<Products />} />
          <Route path="/productDetail/:detailId?" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="/products/:productId" element={<About />} /> */}
        </Routes>
        {/* <Apidata/> */}

      </>
    </Router>
  )
}

export default App
