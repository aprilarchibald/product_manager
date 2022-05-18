import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'

    const Main = (props) => {
        const [product, setProduct] = useState([]);
        
        useEffect(()=>{
            axios.get('http://localhost:8000/api/product')
                .then(res=>{
                    setProduct(res.data);
                    // console.log(JSON.stringify(res.data))
                })
                .catch(err => console.error(err));
        },[]);

        const removeFromDom = productId => {
            setProduct(product.filter(product => product._id !== productId));
        }
        const createProduct = (newProduct) => {
            console.log(newProduct)
            axios.post('http://localhost:8000/api/product', newProduct)
                .then(res=>{
                    setProduct([...product, res.data]);
        }
    )}

    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm onSubmitProp = {createProduct} initialTitle="" initialPrice ="" initialDescription= ""/>
            <ProductList product ={product} removeFromDom ={removeFromDom}/>
        </div>
    )
}
export default Main;

