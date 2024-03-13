
import React, { useEffect, useState } from 'react'
import "./Api.css"
const Apidata = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        async function getData(){
            const get = await fetch("https://fakestoreapi.com/products")
            const res = await get.json();
            setData(res);
        }
        getData();
    },[])
  return (
    <div>
      <h1 className='heading'>Fetching Data From Api</h1>
      <div className='container'>
        {
            data.map((element,index)=>{
            return (
                <div className='data'>
                key={index}
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

export default Apidata
