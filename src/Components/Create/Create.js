import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [input,setInput]=useState('')
  const [image,setImage]=useState()

  const handleChange=(e)=>{
    setInput(prevState=>({...prevState,[e.target.name]:e.target.value}))
  }
  const handleSubmit=()=>{
    
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
            value={input.name}
            onChange={(e)=>handleChange(e)}
              className="input"
              type="text"
              id="name"
              name="name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            value={input.category}
            onChange={(e)=>handleChange(e)}
              className="input"
              type="text"
              id="category"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            value={input.price}
            onChange={(e)=>handleChange(e)}
            className="input" type="number" id="price" name="price" />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''} ></img>
            <br />
            <input 
            onChange={(e)=>setImage(e.target.files[0])}
            type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
