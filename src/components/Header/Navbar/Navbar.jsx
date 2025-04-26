import React ,{useContext, useRef} from 'react' ;
import './Navbar.css' ;
// icons--
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
// images--
import banner_1 from '../../../assets/images/menu-banner1.jpg'
import banner_2 from '../../../assets/images/menu-banner2.jpg'
import banner_3 from '../../../assets/images/menu-banner3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import { Link } from 'react-router-dom';
import { wishContext } from '../../../context/AddWish';
import { cartContext } from '../../../context/cartcontext';


function Navbar() {


const {cart} = useContext(cartContext)
const {wish} = useContext(wishContext)

  const dropdownmenu = useRef(null)
  const colse = useRef(null)
  const menu = useRef(null)
 
 
function toggleDropDownMenu(e){
dropdownmenu.current.classList.toggle('open')

if(e === 'colse'){
  colse.current.classList.remove('open')
  menu.current.style.display = 'flex'
}else if(e === 'menu'){
  
  colse.current.classList.add('open')
  menu.current.style.display = 'none'
}
}

  return (
    <div className='Navbar container'>
      <div className='flex cardmenu'><b>menu</b></div>
      <ul className='flex' ref={dropdownmenu}>
        <li>
          <Link to={''}>Home</Link>
        </li>
        <li>
          <a href="#">Collection</a>
          <div className='dropdown container'>
       <div className='row'>
       <div className="col-md-3 ">
         <div className='d-flex flex-column gap-1'>
         <b className='d-block fs-5 mb-2'>Womwen`s</b>
         <div className='d-flex flex-column gap-1'>
           <a href='#'>Unique Features</a>
           <a href='#'>Image Resposive</a>
           <a href='#'>Auto Carusel</a>
           <a href='#'>Nawslatter Form</a>
           <a href='#'>Four Columns</a>
           <a href='#'>Nawslatter Form</a>
           <a href='#'>Good Typograph</a>
         </div>
         </div>
       </div>
       <div className="col-md-3 ">
         <div className='d-flex flex-column gap-1'>
         <b className='d-block fs-5 mb-2'>Mens</b>
         <div className='d-flex flex-column gap-1'>
           <a href='#'>Unique Features</a>
           <a href='#'>Image Resposive</a>
           <a href='#'>Auto Carusel</a>
           <a href='#'>Nawslatter Form</a>
           <a href='#'>Four Columns</a>
           <a href='#'>Nawslatter Form</a>
           <a href='#'>Good Typograph</a>
         </div>
         </div>
       </div>
       <div className="col-md-3 ">
         <div className='d-flex flex-column gap-1'>
         <b className='d-block fs-5 mb-2'>Kides`s</b>
         <div className='d-flex flex-column gap-1'>
           <a href='#'>Unique Features</a>
           <a href='#'>Image Resposive</a>
           <a href='#'>Auto Carusel</a>
           <a href='#'>Nawslatter Form</a>
           <a href='#'>Four Columns</a>
           <a href='#'>Nawslatter Form</a>
           <a href='#'>Good Typograph</a>
         </div>
         </div>
       </div>
       <div className="col-md-3">
         <Swiper
          className='slider'
         slidesPerView={1} 
         spaceBetween={30}
         modules={[Autoplay]}
         autoplay ={{
           delay:2000
         }} 

         speed={1000}
         >
           <SwiperSlide>
             <img src={banner_1} className='w-100 slide_img' alt=""/>
           </SwiperSlide>
           <SwiperSlide>
             <img src={banner_2} className='w-100 slide_img' alt=""/>
           </SwiperSlide>
           <SwiperSlide>
             <img src={banner_3} className='w-100 slide_img' alt=""/>
           </SwiperSlide>
         </Swiper>
       </div>
       </div>

     </div>
        </li>
        <li>
          <Link to={'shop'}>shop</Link>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
        <li className='pages'>
          <a href="#">pages</a>
          <div className="dropdown_2">
         <div >
         <Link  to={'cart'} className='text-white  m-0 p-0 text-uppercase'>cart ( {cart.length} )</Link>
         </div>
         <div>
         <Link className='text-white m-0 p-0 text-uppercase' to={'wishlist'}>wishlist ( {wish.length} )</Link>
         </div>
         <div>
         <Link to={'singlepro/0'}  className='text-white  text-uppercase'>product detalis pages</Link>
         </div>
         <div>
         <Link className='text-white m-0 p-0 text-uppercase' to={''}>sigle post</Link>
         </div>
          </div>
        </li>
        <li>
          <Link to={'about'}>about us</Link>
        </li>
        <li>
          <Link to={'contact'} href="#">contact us</Link>
        </li>
      </ul>
      <div className='boxmenu'>
  <div className='flex colse' ref={colse} onClick={e => toggleDropDownMenu('colse')}>
  < MdOutlineClose />
  </div>
  <div className='flex menu' onClick={e => toggleDropDownMenu('menu')} ref={menu}>
   <CiMenuFries  className='meun' />

  </div>

  </div>
    </div>
  )
}

export default Navbar
