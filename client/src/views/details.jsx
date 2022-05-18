import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            // console.log(JSON.stringify(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = (deleteId) => {
        axios.delete("http://localhost:8000/api/product/" + deleteId)
            .then(res => {
                // console.log(res.data)
                navigate("/")
                // setProduct(product.filter((product) => product._id !== deleteId))
            })
            // console.log(JSON.stringify(res.data))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to = {`/update/${product._id}`}>Update a Product</Link><br/>
            <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
        </div>
    )
}
    
export default Detail;