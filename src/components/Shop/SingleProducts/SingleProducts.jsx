import React, { useContext, useEffect, useRef, useState } from 'react'
import './SingleProducts.css'
import {Outlet , useParams , Link} from 'react-router-dom'
// ---img
import img from '../../../assets/images/left1.jpg'
import Stars from '../../Stars/Stars';
import PageHeading from '../../PageHeading/PageHeading';
// ---icons
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { apicontext } from '../../../context/ApiContext';
import { cartContext } from '../../../context/cartcontext';
import Allcategory from '../../category/Allcategory';
import { wishContext } from '../../../context/AddWish';

function SingleProducts() {
    

  const {addToCart} = useContext(cartContext)
  const {addWishlist} = useContext(wishContext); 

  const {allData} = useContext(apicontext);
  const bgImg = useRef('null')
  const {id} = useParams()
  const links = useRef(null)
  const [pro,setPro] = useState({})
  
  
function changeActive(e){
    let alllinks = links.current.querySelectorAll('.links a')
    alllinks.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  }
function changeBg(e) {
  let fristImgBig = bgImg.current.getAttribute('src' )
  bgImg.current.setAttribute('src' , e.target.src)
  e.target.setAttribute('src' , fristImgBig)
}

useEffect(() => {
setPro(allData[id])
}, [])

  return (
    <div className='About container mt-5'>
      <PageHeading  NameCom={'Home'}  title={`Products / SingleProducts  ` } titlePro={pro?.title}/>
    <div className="row">
  <div className="col-lg-3 col-md-12">
  <Allcategory />
         <div className='just_img col-lg-12 col-md-12  '>
           <img src={img} alt=""  className='w-100 mt-5'/>
         </div>
         <div className="col-lg-12 col-md-12 mt-3">
      
         </div>
       </div>
 <div className='d-flex flex-column col-lg-9 col-md-12'> 

       <div className="detalisPro col-lg-9 col-md-12 d-flex gap-3 mt-4">
        <div className="col-lg-5 col-md-12 w-45">
         <div className=' productImg border col-lg-12 col-md-12' >
           <img src={pro?.img || pro?.thumbnail} alt="" className='w-100 h-100' ref={bgImg}/>
         </div>
         <div className='smallImg flex col-lg-12 px-3 col-md-12  mt-3 gap-2'>
          {pro?.images?.map((img , i)=>(
        <div className='Cardimg col-3 flex '  >
            <img src={ img  } alt="" className='w-100 ' onClick={changeBg} />
        </div>              
          ))}
           </div>
           
        </div>
      
      <div className=" col-lg-4 col-md-12 w-50">
        <div className="detalis d-flex flex-column">
         <div className='d-flex flex-column border-bottom  pb-4 '>
           <p className='m-0 p-0 fs-3 fw-bold'>{pro?.title}</p>
           <Stars  />
           <p className='m-0 p-0 pt-2'>${pro?.price}</p>
         </div>
         <div className='d-flex flex-column border-bottom  pb-4 '>
           <p className='m-0 p-0 pt-3' >Categrory : {pro?.category}</p>
           <p className='m-0 p-0 pt-3' >Aproiablity :aproiable</p>
         </div>
         <div className='border-bottom  pb-4'>
           <p className='m-0 p-0'>{pro?.description}</p>
         </div>
        <div className='d-flex flex-column gap-3 mt-3'>
         <div className='boreder ' onClick={()=>addWishlist(pro)}> 
           <button className='btn border text-white w-100 btn_single ' style={{background : 'transparent'} } >Add To Wishlist <FaHeart /> </button>
         </div>
         <div className='boreder '> 
           <button onClick={()=>addToCart(pro)} className='btn border text-white w-100 btn_single ' style={{background : 'transparent'} } >Add To Cart <FaCartPlus /> </button>
         </div>
        </div>
        </div>
      </div>

       </div>
      
          <div className='mt-5 col-12 border-bottom' ref={links}>
        <div className='d-flex gap-1 links'>
          <Link onClick={changeActive} to={''} className='active'>OverView</Link>
          <Link onClick={changeActive} to={'nested_2'}>Review</Link>
          <Link onClick={changeActive} to={'nested_3'}>Solution</Link>
        </div>
      <Outlet/>
        <div>
    </div>
         </div>
         </div>
 
      </div>
      </div>
  )
}

export default SingleProducts
