import React from 'react' ;
import './Heading.css' ;

// Images-----------
import banner_1 from '../../../assets/images/main_banner1.jpg'
import banner_2 from '../../../assets/images/main_banner2.jpg'
import heading_1 from '../../../assets/images/heading-1.png'
import heading_2 from '../../../assets/images/heading-2.png'
import heading_3 from '../../../assets/images/heading-3.png'
import heading_4 from '../../../assets/images/heading-4.png'

import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

function Heading() {
  return (
    <div className='Heading container'>
    <Swiper 
      modules={[Pagination , Autoplay]}
      autoplay ={{
        delay : '90000'
      }}
      speed={'2000'}
      pagination={{
        clickable : true,
      }}

    >
     <SwiperSlide>
       <img src={banner_1} className='w-100' alt="" />
     </SwiperSlide>
     <SwiperSlide>
       <img src={banner_2} className='w-100' alt="" />
     </SwiperSlide>
 
   </Swiper>

   <div className="row  px-1 mt-5 ">

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className='flex '>
        <div>
        <img src={heading_1} alt="" />
        </div>
        <div className='d-flex flex-column'>
          <b className='plan_hover'>Free Shipping</b>
          <span className='plan_hover_2 fs-6'>Free dedlivery Worldwide</span>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className='flex '>
        <div>
        <img src={heading_2} alt="" />
        </div>
        <div className='d-flex flex-column'>
          <b className='plan_hover'>Free Shipping</b>
          <span className='plan_hover_2 fs-6'>Free dedlivery Worldwide</span>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className='flex  '>
        <div>
        <img src={heading_3} alt="" />
        </div>
        <div className='d-flex flex-column'>
          <b className='plan_hover'>Free Shipping</b>
          <span className='plan_hover_2 fs-6'>Free dedlivery Worldwide</span>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className='flex  '>
        <div>
        <img src={heading_4} alt="" />
        </div>
        <div className='d-flex flex-column'>
          <b className='plan_hover'>Free Shipping</b>
          <span className='plan_hover_2 fs-6'>Free dedlivery Worldwide</span>
        </div>
      </div>
    </div>

   </div>
  </div>
  )
}

export default Heading
