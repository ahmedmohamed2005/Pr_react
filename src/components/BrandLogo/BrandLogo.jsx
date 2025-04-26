import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// ------------images
import brand1 from '../../assets/images/brand/brand1.png'
import brand2 from '../../assets/images/brand/brand2.png'
import brand3 from '../../assets/images/brand/brand3.png'
import brand4 from '../../assets/images/brand/brand4.png'
import brand5 from '../../assets/images/brand/brand5.png'
import brand6 from '../../assets/images/brand/brand6.png'
import brand7 from '../../assets/images/brand/brand7.png'
import brand8 from '../../assets/images/brand/brand8.png'
import brand9 from '../../assets/images/brand/brand9.png'
// swiper---------------------===

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination , Navigation ,Autoplay    } from 'swiper/modules';

function BrandLogo() {
  return (
    <section className='BrandLogo container'>
      <SectionTitle title={'Brand logo'}/>
      <div className="container px-5">
        <Swiper 
        className="row mt-5"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination , Autoplay , Navigation]}
        autoplay ={{
          delay:'500',
          disableOnInteraction : false , 

         }} 
      
        navigation ={{
         prevEl : '.BrandLogo .slide_to_left' , 
         nextEl : '.BrandLogo .slide_to_right' ,
        }}
        >
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand1} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand2} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand3} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand4} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand5} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand6} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand7} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand8} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
       <SwiperSlide >
            <div className="product">
              <div>
                <img src={brand9} alt="" className='w-100'/>
              </div>
             </div>
       </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default BrandLogo

