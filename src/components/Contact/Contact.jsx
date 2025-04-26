import React from 'react'
import './Contact.css'
import Allcategory from '../category/Allcategory'


function Contact() {
  return (
    <div className='Contact container'>
      <div className="row  mt-5">
        <div className="col-lg-3 col-md-12">
       <Allcategory />
        </div>
        <div className="col-lg-9 col-md-12">
          <div className='d-flex rowing col-lg-12 col-md-12'> 
          <div className="col-lg-4 col-md-12">
         <div className="container mt-3">
          <div className='d-flex flex-column gap-4'>
          <div className='d-flex flex-column gap-2'>
              <b className='pb-1 fw-bold text-light'>Our Location</b>
              <p className='m-0 p-0 text-secondary'>Office address</p>
              <p className='m-0 p-0 text-secondary'>124,Lorem Ipsum has been</p>
              <p className='m-0 p-0 text-secondary'>text ever since the 1500</p>
              <p className='m-0 p-0 text-secondary'>+91-9987-654-321</p>
            </div>
            <div className='d-flex flex-column gap-2'>
              <b className='pb-1 fw-bold text-light'>Careers</b>
              <p className='m-0 p-0 text-secondary'>dummy text ever since the 1500s,</p>
              <p className='m-0 p-0 text-secondary'>simply dummy text of thetypesetting industry.</p>
              <p className='m-0 p-0 text-secondary'>careers@yourdomain.com</p>
            </div>
            <div className='d-flex flex-column gap-2'>
              <b className='pb-1 fw-bold text-light'>Say Hello</b>
              <p className='m-0 p-0 text-secondary'>simply dummy text of the printing and typesetting industry.,</p>
              <p className='m-0 p-0 text-secondary'>info@yourdomailname.com</p>
            </div>
          </div>
         </div>
        </div>
        <div className="col-lg-8 col-md-12" >
          <div className='container mt-3'>
          <div className='d-flex flex-column'>
            <input type="text" placeholder='Name' className='py-2 mb-4 ps-2 bg-white border-0'/>
            <input type="text" placeholder='Email addres' className='py-2 mb-4 ps-2 bg-white border-0'/>
            <input type="number" placeholder='Phone number' className='py-2 mb-4 ps-2 bg-white border-0'/>
            <input type="text" placeholder='Sbject' className='py-2 mb-4 ps-2 bg-white border-0'/>
            <input type="text" placeholder='Subject' className='Subject mb-4 ps-2 bg-white border-0'/>
          </div>
        </div>
        </div>
          </div>
        <div className='col-lg-12 col-md-12 mt-5  ' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6287.711857911866!2d31.49906307437599!3d30.59053922674765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YXZiNmC2Lkg2LTYsdmD2Ycg2KjYsdin2YHZiCDYp9mE2LLZgtin2LLZitmC!5e1!3m2!1sar!2seg!4v1738931351531!5m2!1sar!2seg" frameborder="0" className='iframe_Bravo '></iframe>
        </div>
        </div>
   
   

     </div>

    </div>
  )
}

export default Contact

