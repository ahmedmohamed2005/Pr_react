import React, { useContext, useRef } from 'react'
import  "./Allcategory.css"
import { spcificCategory } from '../ProductJson'
import { apicontext } from '../../context/ApiContext'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Allcategory() {

  const  openCart = useRef();
  const  arrow = useRef();

  function showCat(){
openCart.current.classList.toggle("open")
arrow.current.classList.toggle('repeat')
  }

    const {getAllData , getcatAPi , getcatJSON , catApi} = useContext(apicontext)

  return (
   <div className="categories">
            <div className="aside_title flex justify-content-between">
              <p>Top Category</p>
               <div onClick={showCat} ref={arrow}>
                <FaArrowUp />
               </div>
              </div>
            <div className="cat_list  " ref={openCart}>
            <Link  to={"/shop"}  onClick={()=> getAllData()}  className='text-center fs-5 '  >All products</Link>
           {spcificCategory.map((val , key)=>(
             <Link  to={"/shop"} onClick={()=>getcatJSON(key)} key={key}  >{val.category}</Link>
           ))}
          {catApi.map((el , key) => <a  onClick={()=>getcatAPi(el.url)} key={key} >{el.name}</a>)}
            </div>
           </div>
  )
}

export default Allcategory
