import React, { useState } from "react";

const ProductForm = ({setProduct,product}) => {
  const [err,setErr] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);
    if(price<=0){
      setErr("Price Cannot be negative or 0.");
      return;
    }
    else if(quantity<0){
      setErr("Quantity cannot be negative");
      return;
    }
    else{
      setErr('')
    }
    const allProduct = {
      name,
      price,
      quantity,
    };
    
    setProduct([...product,allProduct])
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" name="name" placeholder="Product Name" />
        <br />
        <input type="price" name="price" placeholder="Price" />
        <br />
        <input type="quantity" name="quantity" placeholder="Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      
        <p style={{color:'red'}}>
          <small>{err}</small>
        </p>
      
    </div>
  );
};

export default ProductForm;
