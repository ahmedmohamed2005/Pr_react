import React, { useEffect, useRef , useState } from 'react'
import './About.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import {Swiper , SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/css/effect-coverflow';
// import required modules
import { EffectCoverflow, Pagination , Navigation ,Autoplay    } from 'swiper/modules';
import team1 from '../../assets/images/tm1.jpg'
import team2 from '../../assets/images/tm2.jpg'
import team3 from '../../assets/images/tm3.jpg'
import team4 from '../../assets/images/tm4.jpg'
import team5 from '../../assets/images/tm5.jpg'
import team6 from '../../assets/images/user1.jpg'
import team7 from '../../assets/images/user2.jpg'
import team8 from '../../assets/images/user3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

// ----img
import img from '../../assets/images/left1.jpg'
import img_2 from '../../assets/images/about_page.jpg'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Allcategory from '../category/Allcategory';

function About() {

  const html = useRef(null)
  const boot = useRef(null)
  const css = useRef(null)
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);




  function ShowDropDown(e){

    if(e === 'html'){
     html.current.classList.add('open')
     css.current.classList.remove('open')
     boot.current.classList.remove('open')
    }else if(e === 'boot'){
      boot.current.classList.add('open')
      css.current.classList.remove('open')
      html.current.classList.remove('open')
    }else if(e === 'css'){
      css.current.classList.add('open')
      html.current.classList.remove('open')
      boot.current.classList.remove('open')
    }
  }
 

  return (
    <div className='About container '>
      <div className="row mt-1">
    
      <div className="col-lg-3 col-md-12">
        <Allcategory />
     
      <div className='just_img '>
            <img src={img} alt=""  className='w-100 mt-5'/>
      </div>
      </div>

      <div className="col-lg-9 col-md-12">
        <div className='col-lg-12'>
          <img src={img_2} alt="" className='w-100'/>
        </div>

        <div className="col-lg-12 mt-4">
          <b className='p-0  text-uppercase'>themini Design is Best Part of my Life</b>
          <p className='p-0 py-2 m-0 text-secondary'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <button className='btn btn-success px-5'>Hiri Me</button>
        </div>

        <div className='workJsAbout gap-3 w-100 d-flex  col-lg-12 mt-4'>

          <div className='col-6 d-flex flex-column justify-content-start'>
            <b className='fs-2  fw-bold py-1 px-2 border-bottom border-secondary'>  What We Do ?</b>
          <ul className='px-2 py-2'>
            <li className='card  m-0 p-0 mb-2 rounded-0 text-dark 'onClick={e =>ShowDropDown('html')}>
              <a className=' w-100 fs-4 text-dark p-2' >1. What is HTML?</a>
              <div className="dropDown open " ref={html}>
                <p className='p-0 m-0'>HTML is a computer language devised to can then b the Internet. It is relatively easy to learn, with the basics being accessible.</p>
              </div>
            </li>
            <li className='card  m-0 p-0 mb-2 rounded-0 text-dark 'onClick={e =>ShowDropDown('boot')}>
              <a className=' w-100 fs-4 text-dark p-2' >2. What is Bootstrap?</a>
              <div className="dropDown "ref={boot}>
                <p className='p-0 m-0'>Bootstrap is the most popular HTML, CSS, and JS frameen I discovered Bootstrap a few was still gaining in popularity, addition to HTML, CSS and JS</p>
              </div>
            </li>
            <li className='card  m-0 p-0 mb-2 rounded-0 text-dark 'onClick={e =>ShowDropDown('css')}>
              <a className=' w-100 fs-4 text-dark p-2 ' >3. What is CSS?</a>
              <div className="dropDown "ref={css}>
                <p className='p-0 m-0'>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS.</p>
              </div>
            </li>
          </ul>
          </div>

          </div>

          <div className='mt-5 col-lg-12 '>
              <SectionTitle title={'Our Creative Team'}/>
              <Swiper
                className='row mt-2'
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination , Autoplay , Navigation]}
                autoplay ={{
                  delay:'1500',
                  disableOnInteraction : false , 
        
                 }} 
              
                navigation ={{
                 prevEl : '.About .slide_to_left' , 
                 nextEl : '.About .slide_to_right' ,
                }}
              >
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team1} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User One</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team2} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Two</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team3} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Three</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team4} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Four</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team5} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Five</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team6} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Six</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team7} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Seven</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>  
                  <div className="card">
                    <div className="card-img">
                      <img src={team8} alt="" />
                    </div>
                    <div className="card-body p-3">
                      <p className='text-secondary'>JavaScript Developer</p>
                      <p className='my-2 text-light'>User Eight</p>
                      <p className='datails text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate aut commodi consequatur tempora voluptatibus odit, et atque dolorem earum sed pariatur nisi corrupti nesciunt, quos qui inventore! Quasi, asperiores.</p>
                      <div className='flex gap-1'>
                        <div className='icons'>
                          <FaFacebookF/>
                        </div>
                        <div className='icons'>
                          <FaTwitter/>
                        </div>
                        <div className='icons'>
                          <FaWhatsapp/>
                        </div>
                        <div className='icons'>
                          <FaInstagram/>
                        </div>
                        <div className='icons'>
                          <FaLinkedinIn/>
                        </div>
                        <div className='icons'>
                          <FaPinterest/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
        </div>

        </div>

      </div>

  )
}

export default About
