
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "./Api.css"
const Products = () => {

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
  }, [])


  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filterData = data.filter((element) => {
    return element.title.toLowerCase().includes(search.toLowerCase());
  })

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

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Products