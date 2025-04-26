import React from 'react' ;

function Nested2() {
  return (
    <div className='Nested2 mt-2 d-flex flex-column gap-2'>
      <b className='text-uppercase'>Write a Review</b>
      <div>
        <p className='m-0'>Your Name</p>
        <input type="text" className='form-control rounded-0'/>
      </div>
      <div>
        <p className='m-0'>Your Review</p>
        <textarea type="text" className='form-control rounded-0'/>
      </div>
    </div>
  )
}

export default Nested2
