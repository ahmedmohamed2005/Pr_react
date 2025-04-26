import React from 'react'
import './SectionTitle.css'
// -------icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function SectionTitle({title}) {
  return (
    <div className="sec_title flex justify-content-between border-bottom pb-2 px-3">
        <div className='text-uppercase fs-6'>{title }</div>
        <div className='flex gap-5'>       
         <div className='flex'>
          <div className='slide_to_left slider_icons'>
              <IoIosArrowBack />
          </div>
          <div className='slide_to_right slider_icons'>
            <IoIosArrowForward />
          </div>
         </div>

        </div>

      </div>
  )
}

export default SectionTitle
