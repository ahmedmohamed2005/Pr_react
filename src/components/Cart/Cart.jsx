import React from 'react' ;
import './Cart.css' ;

// icon 
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from 'react';
import { cartContext } from '../../context/cartcontext';


function Cart() {

  const {cart , deleteCart , changeAmount} = useContext(cartContext)

  let totla = 0
  
  const totlaCart = cart.reduce((a , b)=>(
   a + (b.price * b.amount)
  ) , 0)

  
  return (
    <div className='Cart container'>
      {cart.length > 0 ? 
    <>
    <div className="container mt-4">
      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((val, i) => {
           totla += val.price * val.amount
          return( 
            <tr key={i}>
              <td>
                <img
                  src={val.img || val.thumbnail}
                  alt="Product"
                  style={{ width: "70px", height: "70px" }}
                  className="rounded"
                />
              </td>
              <td>{val.title?.split(" ").slice(0,2).join(" ")}</td>
              <td>{val.category}</td>
              <td>
                <input onChange={(e)=>changeAmount(e , val)} type="number" min={"1"} max={"50"} defaultValue={val.amount} className="form-control w-50 mx-auto"/>
              </td>
              <td>${val?.price}</td>
              <td>${val?.price * val.amount}</td>
              <td>
                <button
                  onClick={() => deleteCart(val)}
                  className="btn btn-danger"
                >
                  <IoIosCloseCircleOutline size={24} />
                </button>
              </td>
            </tr> 
            )
})}
        </tbody>
      </table>
      <button className="btn btn-danger mt-3 w-100" onClick={()=>deleteCart('all')}>Remove All Products</button>
    </div>
    </>
    : <div className='text-danger text-center fs-1 text-uppercase'>There is no Products Here</div>
    }

              <div className='flex justify-content-between w-50 mt-5 totall'>
                <p className='m-0'>Totall cart :</p>
                <p className='m-0'>$ {totlaCart.toFixed(2)}</p>
              </div>

    </div>
  )
}

export default Cart
