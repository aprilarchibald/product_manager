import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import {useParams} from 'react-router-dom'

    const Update = (props) => {
        const [title, setTitle] = useState("");
        const [price, setPrice] = useState("");
        const [description, setDescription] = useState("");
        
        const {id} = useParams(); //useParams
        
        useEffect(()=>{
            axios.get('http://localhost:8000/api/product/' + id)
                .then(res=>{
                    console.log(res.data)
                    setTitle(res.data.title);
                    setPrice(res.data.price);
                    setDescription(res.data.description);
                    // console.log(JSON.stringify(res.data))
                })
                .catch(err => console.error(err));
        },[id]);

        const updateProduct = product => {//e
            //prevent default behavior of the submit
            // e.preventDefault();
            //make a post request to update a product
            axios.put(`http://localhost:8000/api/product/${id}`, product )
            // {
            //     title,
            //     price,
            //     description
            // })
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
        }


    return (
        <div>
            <h2>Update a Product</h2>
            {title &&
            <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={title}
                initialPrice={price}
                initialDescription={description}
            />
            }

            {/* Is there a way to use this imported component for form?
            <ProductForm/> */}
            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br/>
                    <input onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit"/>
            </form> */}


        </div>
    )
}
export default Update;