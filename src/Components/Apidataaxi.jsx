
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Api.css"
const Apidataaxi = () => {

    const[data,setData]=useState([]);
    const[search,setSearch] = useState("");
    
    useEffect(()=>{
        async function getData(){
            try{const response = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
        }
        catch(error) {
            console.error("There was an error fetching the data:", error); 
        }
    }    
     getData()     
            },[])


     const handleSearch = (event)=>{
      setSearch(event.target.value)
     }      
     
     const filterData = data.filter((element)=>{
      return element.title.toLowerCase().includes(search.toLowerCase());
     })
     

  return (
    <div>
      <h1 className='heading'>Fetching Data From Api</h1>
     <input type="text"  style={{margin:"20px"}} onChange={handleSearch}/>
      <div className='container'>
        {
            filterData.map((element,index)=>{
            return (
                <div className='data' key={index}>
                <h4>{element.title}</h4>
                <h4>{element.price}</h4>
                <h4>{element.description}</h4>
                <img className="image" src={element.image} alt="" />
            </div>
            )})
        }
         
      </div>
    </div>
  )
}

export default Apidataaxi