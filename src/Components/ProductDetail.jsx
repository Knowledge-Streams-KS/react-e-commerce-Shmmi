import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const [product, setProduct] = useState([])
    const { detailId } = useParams();
    const fetchData = async () => {
        const resp = await axios.get(`https://fakestoreapi.com/products/${detailId}`)
        setProduct(resp.data)
        console.log(resp)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

         <h1>Title:{product.title}</h1>
         <h1>price : {product.price}</h1>
         <h4>{product.description}</h4>
         <img className="image" src={product.image} alt="" />
        </>
    )
}

export default ProductDetail;