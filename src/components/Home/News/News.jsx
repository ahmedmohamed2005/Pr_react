import React from 'react'
import './News.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay , Pagination ,Navigation } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// -----images
import banner_1 from '../../../assets/images/blog/blog_img_01.jpg'
import banner_2 from '../../../assets/images/blog/blog_img_02.jpg'
import banner_3 from '../../../assets/images/blog/blog_img_03.jpg'
import banner_4 from '../../../assets/images/blog/blog_img_04.jpg'
import banner_5 from '../../../assets/images/blog/blog_img_05.jpg'
import banner_6 from '../../../assets/images/blog/blog_img_06.jpg'
import banner_7 from '../../../assets/images/blog/blog_img_07.jpg'
import banner_8 from '../../../assets/images/blog/blog_img_08.jpg'

// ------icons
import { FaLink } from "react-icons/fa6";
import SectionTitle from '../../SectionTitle/SectionTitle';

function News() {
  return (
    <section className='News container'>
<SectionTitle title={'Latest News'}/>
   
   <div className="container">
    <Swiper 
    className="row flex"
          spaceBetween={40}
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
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
             modules={[Autoplay , Pagination  ,Navigation]}
             autoplay ={{
              delay:'1500',
              disableOnInteraction : false , 

             }}       
             navigation ={{
              prevEl : '.News .slide_to_left' , 
              nextEl : '.News .slide_to_right' ,
             }}
    
    >
      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_1} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>

        <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>

        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_2} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
        <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_3} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
    <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_4} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
    <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_5} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
    <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_6} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
    <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_7} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
    <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <div className='product mt-5 d-flex flex-column gap-3'>
        <div>
          <img src={banner_8} alt="" className='w-100'/>
        </div>
        <div className="detalis d-flex flex-column gap-3 px-2">
         <b className='text-uppercase text-white'>fashion fads , style is eternal</b>
         <p className='m-0 p-0'>Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
         <div className='flex justify-content-between Endcard'>
          <p className='m-0 p-0'> 0 commonts</p>
          <p className='m-0 p-0'><FaLink/>  Read more</p>
         </div>
        </div>
    <div className="dropDown">
          <div className='flex flex-column '>
            <p className='m-0 p-0 fs-2'>17</p>
            <p className='m-0 p-0 fs-6'>Aug</p>
          </div>
        </div>
        </div>
      </SwiperSlide>

      </Swiper>
      
   </div>


    </section>
  )
}

export default News

