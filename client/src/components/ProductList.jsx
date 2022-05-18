import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import deleteProduct from './delete'

const ProductList = (props) => {

    const { removeFromDom } = props;
    
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2>All Products</h2>
            {props.product.map( (product) =>
                <div key={product._id}><Link to = {`/${product._id}`}>{product.title}</Link><br/>
                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </div>
                
            )}
            
        </div>
    )
}
    
export default ProductList;