import React, { useContext } from 'react' ;
import './Wishlist.css' ;
import Allcategory from '../category/Allcategory';
// icons---
import { IoMdClose } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";

// images
import img from '../../assets/images/left1.jpg'
import { cartContext } from '../../context/cartcontext';
import { wishContext } from '../../context/AddWish';
function Wishlist() {

  const {addToCart} = useContext(cartContext)
  const {wish,deleteWishlist} = useContext(wishContext)
 
   

  return (
    <div className='container'>
      <div className="row">

     <div className="col-lg-3 col-md-12 ">
     <Allcategory />
     <div className='just_img '>
       <img src={img} alt=""  className='w-100 mt-5'/>
     </div>
     </div>

        <div className="col-lg-9 col-md-12 mt-3">
          <div className='div_pro_wish'>
         {wish.map((val , i)=>(

          <div className='product_wish d-flex flex-column' key={i}>
            <div className='images'>
              <img src={val?.img || val?.thumbnail}  alt="" />
            </div>
            <div className='flex flex-column gap-2'>
              <p className='p-0 m-0'>{val?.title.split(" ").slice(0,2).join(" ")}</p>
              <p className='p-0 m-0'>${val?.price}</p>
            </div>
               <div className="prosess flex justify-content-around">
               <div className='heart flex' onClick={()=>deleteWishlist(val)}>
                 <IoMdClose />
               </div>
               <div className='cart flex' onClick={()=>addToCart(val)}>
                 <FaCartPlus />
              </div>
             </div>

           </div>
         ))}
             
           </div>
        </div>

      </div>

    </div>
  )
}

export default Wishlist
