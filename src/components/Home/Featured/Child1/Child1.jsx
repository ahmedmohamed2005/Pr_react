import React, { useContext } from 'react' ;
import './Child1.css' ;
import Products from '../../../Products/Products';
import {Swiper , SwiperSlide} from 'swiper/react' 
import {Autoplay , Pagination ,Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// -------img
import img_1 from '../../../../assets/images/product/product1.jpg'
import imgH_1 from '../../../../assets/images/product/product1-1.jpg'
import img2 from '../../../../assets/images/product/product2.jpg'
import imgH_2 from '../../../../assets/images/product/product2-1.jpg'
import img_3 from '../../../../assets/images/product/product3.jpg'
import imgH_3 from '../../../../assets/images/product/product3-1.jpg'
import img_4 from '../../../../assets/images/product/product4.jpg'
import imgH_4 from '../../../../assets/images/product/product4-1.jpg'
import img_5 from '../../../../assets/images/product/product5.jpg'
import imgH_5 from '../../../../assets/images/product/product5-1.jpg'
import { apicontext } from '../../../../context/ApiContext';
import { cartContext } from '../../../../context/cartcontext';
import { wishContext } from '../../../../context/AddWish';

function Child1() {


  const {addToCart} = useContext(cartContext)
  const {addWishlist} = useContext(wishContext)
  const {allData} = useContext(apicontext); 

  return (
    <div className='Child1 container'>
        <Swiper
      className="row mt-5 "
      breakpoints={{
       640: {
         slidesPerView: 1,
         spaceBetween: 20,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 40,
       },
       1024: {
         slidesPerView: 4,
         spaceBetween: 50,
       },
     }}
      modules={[Autoplay , Pagination  ,Navigation]}
      autoplay ={{
       delay:'4000',
       disableOnInteraction : false
      }}
      pagination={{
       clickable : true , 
       dynamicBullets : true
      }} 
      navigation ={{
        prevEl : '.Featuerd .slide_to_left' , 
        nextEl : '.Featuerd .slide_to_right' ,
       }}
     >  

       { allData.slice(0 ,10).map((val , key)=>(
        <SwiperSlide key={key}>
          <Products addWishlist={addWishlist} val={val}   addToCart={addToCart}/>
        </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default Child1
