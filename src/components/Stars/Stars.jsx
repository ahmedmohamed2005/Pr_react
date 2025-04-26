import React from 'react'
import './Stars.css'
// ---------icons
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";


function Stars() {
  return (
    <div className='stars' style={{color : 'var(--main-color)'}}>
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStarHalfAlt />
   </div>
  )
}

export default Stars
