import React, { useRef } from 'react'
import './Footer.css'

// -------icons
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoWifiSharp } from "react-icons/io5";
import { SiArgos } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { SiAew } from "react-icons/si";

function Footer() {
const ul = useRef(null)
const drop1 = useRef(null)
const drop2 = useRef(null)
const drop3 = useRef(null)
const drop4 = useRef(null)
const plus1 = useRef(null)
const miuns1 = useRef(null)
const plus2 = useRef(null)
const miuns2 = useRef(null)
const plus3 = useRef(null)
const miuns3 = useRef(null)
const plus4 = useRef(null)
const miuns4 = useRef(null)


function showdrop1(e){
   let AllLink = ul.current.querySelectorAll('.card .dropDown')
AllLink.forEach(el => el.classList.remove('open'))
miuns1.current.style.display = 'none'
miuns2.current.style.display = 'none'
miuns3.current.style.display = 'none'
miuns4.current.style.display = 'none'
plus1.current.style.display = 'flex'
plus2.current.style.display = 'flex'
plus3.current.style.display = 'flex'
plus4.current.style.display = 'flex'
if(e === 'plus'){
    drop1.current.classList.add('open')
    plus1.current.style.display = 'none'
    miuns1.current.style.display = 'flex'
    miuns1.current.classList.add('rotate')
    
  }else if( e === 'miuns'){
    drop1.current.classList.remove('open')
    miuns1.current.classList.remove('rotate')
plus1.current.style.display = 'flex'
miuns1.current.style.display = 'none'

}
if(e === 'plus2'){
    drop2.current.classList.add('open')
  plus2.current.style.display = 'none'
  miuns2.current.style.display = 'flex'
  miuns2.current.classList.add('rotate')

}else if( e === 'miuns2'){
  drop2.current.classList.remove('open')
plus2.current.style.display = 'flex'
miuns2.current.style.display = 'none'
miuns2.current.classList.remove('rotate')

}
if(e === 'plus3'){
    drop3.current.classList.add('open')
  plus3.current.style.display = 'none'
  miuns3.current.style.display = 'flex'
  miuns3.current.classList.add('rotate')

}else if( e === 'miuns3'){
  drop3.current.classList.remove('open')
plus3.current.style.display = 'flex'
miuns3.current.style.display = 'none'
miuns3.current.classList.remove('rotate')


}
if(e === 'plus4'){
    drop4.current.classList.add('open')
  plus4.current.style.display = 'none'
  miuns4.current.style.display = 'flex'
  miuns4.current.classList.add('rotate')

}else if( e === 'miuns4'){
  drop4.current.classList.remove('open')
plus4.current.style.display = 'flex'
miuns4.current.style.display = 'none'
miuns4.current.classList.remove('rotate')


}
}


  return (
    <section className='Footer '>
      <div className="container p-5">
        <div className="row ">
            <div className="col-gl-3 col-md-12 toping">
              <div className='flex justify-content-between cardtop'>
              <div className='datalis'>
                <b className='fs-2 text-uppercase'>Follow Our Updates !</b>
                <p className='p-0 m-0 fs-6 ' >Be the First to know about our Fresh Arrivals and much more!</p>
              </div>
              <div className='flex Divinput'>
                <input type="text" className='form-control bg-white rounded-0 px-5 inputFoot  '  />
                <button className='btn text-uppercase text-white rounded-0  btnfoot '>subscribe</button>
              </div>

              </div>
            </div>

              <ul className='flex gap-4  col-12 ulLink' ref={ul}>
                 <div className="card   col-3 m-0 p-0">
                <li  className='d-flex justify-content-between pb-3 fs-5 text-uppercase  '>
                  Information 
                  <div  className='flex'>
                    <div onClick={e => showdrop1('plus')} ref={plus1}>
                    <FaPlus/>
                    </div>
                    <div  onClick={e => showdrop1( 'miuns')} ref={miuns1}>
                    <IoClose/>
                    </div>
                  </div>

                </li>       

                <div className="dropDown flex " ref={drop1}>
                  <ul className='d-flex flex-column w-100  px-0'>
                    <li className='pb-4 '>About Us</li>
                    <li className='pb-4 '>Delivery Information</li>
                    <li className='pb-4 '>Privacy Policy</li>
                    <li className='pb-4 '>Terms & Conditions</li>
                    <li className='pb-4 '>Contact Us</li>
                  </ul>
                </div>
                 </div>

                 <div className="card col-3 m-0 p-0">
                <li className='d-flex justify-content-between pb-3 fs-5 text-uppercase  mx-0'>
                Services 
                  <div >
                  <div onClick={e => showdrop1('plus2')} ref={plus2}>
                    <FaPlus/>
                    </div>
                    <div onClick={e => showdrop1( 'miuns2')} ref={miuns2}>
                    <IoClose/>
                    </div>
                    </div>
                </li>       

                <div className="dropDown flex " ref={drop2}>
                  <ul className='d-flex flex-column p-0 m-0 w-100'>
                    <li className='pb-4 '>Returns</li>
                    <li className='pb-4 '>Site Map</li>
                    <li className='pb-4 '>Wish List</li>
                    <li className='pb-4 '>My Account</li>
                    <li className='pb-4 '>Order History</li>
                  </ul>
                </div>
                 </div>

                 <div className="card col-3 m-0 p-0">
                <li className='d-flex justify-content-between pb-3 fs-5 text-uppercase  mx-0'>
                  Extras
                  <div >
                  <div onClick={e => showdrop1('plus3')} ref={plus3}>
                    <FaPlus/>
                    </div>
                    <div onClick={e => showdrop1( 'miuns3')} ref={miuns3}>
                    <IoClose/>
                    </div>
                    </div>
                </li>       

                <div className="dropDown flex " ref={drop3}>
                  <ul className='d-flex flex-column p-0 m-0 w-100'>
                    <li className='pb-4 '>Brands</li>
                    <li className='pb-4 '>Gift Certificates</li>
                    <li className='pb-4 '>Affiliates</li>
                    <li className='pb-4 '>Specials</li>
                    <li className='pb-4 '>Newsletter</li>
                  </ul>
                </div>
                 </div>

                 <div className="card col-3 m-0 p-0">
                <li className='d-flex justify-content-between pb-3 fs-5 text-uppercase  mx-0'>
                  Contacts 
                  <div > 
                  <div onClick={e => showdrop1('plus4')} ref={plus4}>
                    <FaPlus/>
                    </div>
                    <div onClick={e => showdrop1( 'miuns4')} ref={miuns4}>
                    <IoClose/>
                    </div>
                    </div>
                </li>       

                <div className="dropDown flex " ref={drop4}>
                  <ul className='d-flex flex-column p-0 m-0 w-100'>
                    <li className='pb-4 ' style={{whiteSpace : 'nowrap'}}>Warehouse & Offices,</li>
                    <li className='pb-4 ' style={{whiteSpace : 'nowrap'}}>12345 Street name, California USA</li>
                    <li className='pb-4 ' style={{whiteSpace : 'nowrap'}}>(+024) 666 888</li>
                    <li className='pb-4 ' style={{whiteSpace : 'nowrap'}}>yourid@domain.com</li>
                    <li className='pb-4 ' style={{whiteSpace : 'nowrap'}}>www.yoursite.com</li>
                  </ul>
                </div>
                 </div>
              </ul>
          
           <div className=" mt-5 Endfooter">
            <div className="flex justify-content-around card_endfoot  gap-2">
              <div className='flex gap-3'>
              <FaFacebookF/>
              <FaGoogle/>
              <FaLinkedinIn/>
              <FaTwitter/>
              <IoWifiSharp/>
              </div>
              <div>
         <p className='m-0 p-0'>@ 2025 All Rights Reserved Darklook</p>
              </div>
              <div className='flex  gap-3'>
              <SiArgos/>
              <FaCcVisa/>
              <RiVisaFill/>
              <SiAew/>
              <FaCcVisa/>
              </div>
            </div>
           </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
