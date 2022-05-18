import React, { useState } from 'react'
import axios from 'axios';

export default props => {
    //refactoring
    console.log(JSON.stringify(props))
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({title, price, description});
        //make a post request to create a new product
        // axios.post('http://localhost:8000/api/product', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res=>console.log(res.data))
        //     .catch(err=>console.log(err))
    }
    console.log(title)
    //onChange to update state variables
    return (
        <form onSubmit={onSubmitHandler}>
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
        </form>
    )
}