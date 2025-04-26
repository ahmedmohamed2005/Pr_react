import React from 'react'
import Stars from '../Stars/Stars';
import {useNavigate} from "react-router-dom"
// icons---
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

function ProductsShop({val , i , addWishlist, addToCart}) {

  const navigate = useNavigate()

    return (

        <div className="product" >
              <div className='images _IMG flex' onClick={()=>navigate(`/singlepro/${i}`)}>
                 <img src={val?.img || val?.thumbnail} alt="" className='card-img '/>
                 <img src={val?.images[0]} alt="" className='card-img '/>
              </div>
                 <div className='detalise card-body d-flex flex-column align-items-center'>
                 <b>{val?.title}</b>
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

export default ProductsShop
