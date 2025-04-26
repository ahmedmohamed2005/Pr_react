import React from 'react' ;
import './Products.css' ;
import Stars from '../Stars/Stars';
// icons---
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

function Products({val , addToCart , addWishlist }) {
  return (
 
    <div className="product" >
    <div className='images'>
       <img src={val?.img || val?.thumbnail} alt="" className='card-img '/>
       <img src={val?.images[0]} alt="" className='card-img '/>
    </div>
       <div className='detalise card-body d-flex flex-column align-items-center'>
       <b>{val?.title.split(" ").slice(0,2).join(" ")}</b>
       <Stars />
       <p className='m-0 p-0'>{val?.description}</p>
       <b>{val?.price}</b>
       </div>
<div className="prosess flex">
<div onClick={()=>addWishlist(val)}>
  <FaHeart />
</div>
<div onClick={()=>addToCart(val)}>
  <FaCartPlus />
</div>
</div>
</div>
  )
}

export default Products
