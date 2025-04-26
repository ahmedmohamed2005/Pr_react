import React, { useRef } from 'react'
import './Info.css'
import { FaAngleDown } from "react-icons/fa6";


function Info() {

  const dropDown_1 = useRef(null)
  const dropDown_2 = useRef(null)
  const up_1 = useRef(null)
  const up_2 = useRef(null)


  const toggledropdown = (state)=>{
  
    
    switch(state){
      case 'one' : 
      dropDown_1.current.classList.toggle('open');
      dropDown_2.current.classList.remove('open');
      up_1.current.classList.toggle('up');
      up_2.current.classList.remove('up');
      break 
      default : 
      up_2.current.classList.toggle('up');
      up_1.current.classList.remove('up');
      dropDown_1.current.classList.remove('open'); 
      dropDown_2.current.classList.toggle('open');
    }

  }


  return (
    <div className='Info border-bottom border-secondary '>
      <div className='container flex justify-content-between py-2'>
     <div className='text-uppercase title ' > Days a Week From 9:00 am To 7:00 pm</div>
        <div className='flex gap-3'> 
          <div>My Account</div>
          <div >
        <div className='flex gap-1' onClick={ e => toggledropdown('one')} style={{cursor:'pointer'}}>
              Language 
          <div className='div' ref={up_1}><FaAngleDown /></div>
              </div>
          <div className='dropdown' ref={dropDown_1}>
            <p>English</p>
            <p>Arabic</p>
          </div>
          </div>
          <div>
            <div className='flex gap-1' onClick={e=>  toggledropdown('two')} style={{cursor:'pointer'}}>Currency 
            <div className='div' ref={up_2}><FaAngleDown /></div>
              </div>
          <div className='dropdown' ref={dropDown_2}>
            <p>$ Euro</p>
            <p>$ Pound sterling</p>
            <p>$ US Dollar</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
