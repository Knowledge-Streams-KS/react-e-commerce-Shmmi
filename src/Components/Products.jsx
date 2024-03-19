
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./Api.css"
import { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';

const Products = () => {
  const[items,setItems] = useContext(CartContext)

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { categoryName } = useParams();

const detailid= useNavigate()

  useEffect(() => {
   
    async function getData() {
      if (categoryName) {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
          setData(response.data);
        }
        catch (error) {
          console.error("There was an error fetching the data:", error);
        }
      }
      else{
        try {
          const response = await axios.get(`https://fakestoreapi.com/products`);
          setData(response.data);
        }
        catch (error) {
          console.error("There was an error fetching the data:", error);
        }
      }
    
    }
    getData()
  }, [categoryName])


  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filterData = data.filter((element) => {
    return element.title.toLowerCase().includes(search.toLowerCase());
  })

  const addCart = (product)=>{
    setItems(prevItems => [...prevItems, product]);
    console.log(addCart)
  }

  return (
    <div>
      <h1 className='heading'>Buy your Favourite Product</h1>
      <input type="text" style={{ margin: "20px" }} onChange={handleSearch} />
      <div className='container'>
        {
          filterData.map((element, index) => {
            return (
              <div className='data' key={index}>
                <h4>{element.title}</h4>
                
                {/* <h4>{element.description}</h4> */}
                <img className="image" src={element.image} alt="" />
                <button onClick={()=> detailid(`/productDetail/${element.id}`)}>Show detail</button>
                {/* <button onClick={()=>{addCart}}>Add to Cart</button> */}
                <button onClick={() => addCart(element)}>Add to Cart</button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Products