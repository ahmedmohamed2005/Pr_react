import React, { useRef , useContext }  from 'react'
import './Logo.css'
import { IoSearchOutline } from "react-icons/io5";
import logo from '../../../assets/images/logo.png'
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { cartContext } from '../../../context/cartcontext';


function Logo() {
  
const {cart , otherChangeAmount , deleteCart} = useContext(cartContext)

  const totlaCart = cart.reduce((a , b)=>(
   a + (b.price * b.amount)
  ) , 0)

const OPenCart = useRef(null)
const location = useLocation()

function OPenDropDown(state){
    OPenCart.current.classList.toggle('open')
}



  return (
    <div className='Logo container'>
      <div className="row AppLogo flex justify-content-between py-4"  >

        <div className='one position-relative col-lg-4 col-md-12'>
          <input type="text" placeholder='Search' className='form-control  border border-secondary rounded-1'/>
          <IoSearchOutline className='icon  position-absolute top-0 end-0 ' style={{transform : 'translate(-50% , 50%)'}}  />
        </div>

        <div className='col-lg-8 col-md-12 d-flex flex justify-content-around '>
                <div className='two col-lg-4 col-md-4 '>
                  <img src={logo} alt='' />
                </div>
                {location.pathname !== "/cart" && (
                <div className='col-lg-4 col-md-4 shopping_cart  position-relative ' >
                  <div className='card_shopping flex gap-3  ' onClick={OPenDropDown}   style={{color: 'white'}} >
                  <FaCartArrowDown className='cart_icon ' />
                <div className='flex flex-column align-items-start' >
                  <p className='text-uppercase m-0'>ShoppingCart</p>
                  <p className='text-uppercase m-0'>Items {cart.length}</p>
                </div>
                  </div>
                  <div className='dropdown_cart position-absolute  px-3 ' ref={OPenCart} >
              

                    <div className="row gy-3 ">
                      <div className="col-12">

                        {cart.length ? 
                        cart.map((el , i )=>(
                        <div className="row border-bottom border-secondary py-2" key={i}>
                          
                          <div className="col-10">
                          <div className="row g-3">
                            <div className="col-4">
                              <img src={el.img || el.thumbnail} alt=""  className='card-img rounded-1' />
                            </div>
                            <div className="col-7">
                              <div className='d-flex flex-column gap-1'>
                                <b>{el.title.split(" ").slice(0,2).join(" ")}</b>
                                <p className='m-0'>${el.price * el.amount}</p>
                                <div className='d-flex gap-2 '>
     <button onClick={e =>otherChangeAmount("plus" , el)} className='btn btn-dark ronded-1 ' >+</button>
                                  <span>{el.amount}</span>
    <button onClick={e =>otherChangeAmount("miuns" , el)} className='btn btn-dark ronded-1 ' >-</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className="col-1  fs-4"  onClick={() => deleteCart(el)}>
                          <IoIosCloseCircle className='colseing'/>
                          </div>

                        </div>
                        ))
                      :
                      <div className='text-danger fw-bold  text-center'>There isn`t Products here</div> 
                      }
                        
              
                      </div>

                      <div className="col-12 ">
                        <div className='flex justify-content-around text-dark' >
                          <div >Totall</div>
                          <div >${totlaCart.toFixed(2)}</div>
                        </div>
                      </div>

                      <div className="col-12" >
                        <Link to={'cart'} className='btn btn-dark w-100 rounded-0'>New Cart</Link>
                      </div>

                    </div>
                  </div> 

                </div>
)}
        </div>
        
      </div>
      
    </div>
  )
}

export default Logo