import React ,{useRef} from 'react' 
import './Featured.css' 
//  ------------icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';
// img
import banner from '../../../assets/images/sub5.jpg'

function Featured() {

  
  const ul = useRef(null)

  function changeActive(e){
    let AllLinks = ul.current.querySelectorAll('li a')
    AllLinks.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
   
    
  }


  return (
    <section className='Featuerd container '>
    <div className="sec_title flex justify-content-between border-bottom pb-2 px-3">
    <div className='text-uppercase fw-bold fs-5'>Featured Products</div>
    <div className='flex gap-5'>
    <ul className='flex gap-5 p-0 m-0' ref={ul}>
      <li onClick={changeActive}>
        <Link to={''} className='active'>New Arrivalse </Link>
      </li>
      <li onClick={changeActive}>
        <Link to={'Best'}>Best Sellers </Link>
      </li>
      <li onClick={changeActive}>
        <Link to={'featured'}>Featured </Link>
      </li>
    </ul>
    
     <div className='flex p-0 m-0'>
      <div className='slide_to_left slider_icons'>
          <IoIosArrowBack />
      </div>
      <div className='slide_to_right slider_icons'>
        <IoIosArrowForward />
      </div>
     </div>

    </div>

  </div>

  <Outlet />  
 
  <div className="fashion mt-5">
    <div className='flex bannerImg'>
      <img src={banner} alt="" className='w-100 banner'/>
    </div>
    </div>
  </section>
  )
}

export default Featured
