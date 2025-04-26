import React , {useRef,useEffect, useContext}from 'react' ;
import Products from '../Products/Products';
import './Shop.css' ;
import PageHeading from '../PageHeading/PageHeading';
import {spcificCategory} from "../ProductJson" ;
// images
import img from '../../assets/images/left1.jpg'
// ----------icons
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ProductsShop from './ProductsShop';
import { apicontext } from '../../context/ApiContext';
import { cartContext } from '../../context/cartcontext';
import Allcategory from '../category/Allcategory';
import { wishContext } from '../../context/AddWish';




function Shop() {

  const {addToCart , AppFlexDir , flexDir} = useContext(cartContext)
  const row = useRef(null) ;
  const col = useRef(null) ;
  const change = useRef(null) ;

  const {allData,sort , changeSort} = useContext(apicontext); 
  const {addWishlist} = useContext(wishContext); 

  

 function ChangeFLex(state){

  if (state === 'row') {
    row.current.classList.add('active')
    col.current.classList.remove('active')
    change.current.classList.remove('change')
    AppFlexDir('row')
  }else if(state === 'col'){
    row.current.classList.remove('active')
    col.current.classList.add('active')
    change.current.classList.add('change')
    AppFlexDir('col')

  }


 }
  
 useEffect(() => {
  if (flexDir === 'row') {
    row.current.classList.add('active')
    col.current.classList.remove('active')
    change.current.classList.remove('change')
  }else if (flexDir == 'col') {
       row.current.classList.remove('active')
    col.current.classList.add('active')
    change.current.classList.add('change')
  }

}, [])

const showData =allData.map((val , key)=>(
  <div key={key}>
    <ProductsShop addWishlist={addWishlist} addToCart={addToCart} val={val} i={key} />
  </div>
))


  return (
    <div className='Shop container  '>
     <PageHeading  NameCom={'Home'}  title={'products'}/>
     <div className="container">
      <div className="row mt-5" > 

        <div className="col-lg-3 col-md-12 ">
         <Allcategory />

          <div className='just_img '>
            <img src={img} alt=""  className='w-100 mt-5'/>
          </div>
        </div>

        <div className="col-lg-9 col-md-12">
        <div className="sotring_data flex justify-content-between border py-2 px-3">
            <div className='flex gap-3'>
              <div className=' icon active ' onClick={() => ChangeFLex('row')}  ref={row}>
                < BsGrid3X3GapFill />
                </div>
              <div className=' icon ' onClick={() => ChangeFLex('col')}  ref={col}>
                < FaListUl />
                </div>
            </div>
            <div className='flex gap-2'>
             <span style={{whiteSpace : 'nowrap'}}>Sort By :</span>
                 <select defaultValue={sort} onChange={(e)=>changeSort(e)}  className='form-control bg-dark text-white'>
                  <option value='Default'>Default</option>
                  <option value='Name( A-Z )'>Name ( A-Z )</option>
                  <option value='Name( Z-A )'>Name ( Z-A )</option>
                  <option value='Price( Low-Hight )'>Price ( Low-Hight )</option>
                  <option value='Price( Hight-Low )'>Price ( Hight-Low )</option>
                 </select>
            </div>
        </div>

          <div className="container mt-4">
            <div className="row box " ref={change}>
             {showData}
            </div>

          </div>
        </div>

      </div>
     </div>

    </div>
  )
}

export default Shop
