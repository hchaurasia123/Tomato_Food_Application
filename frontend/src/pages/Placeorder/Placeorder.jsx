

import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext'
const Placeorder = () => {


  const {getTotalAmount}=useContext(Storecontext)
  return (

    <>
  <form className="place-order">
    <div className="place-order-left">
    <p className='title'>Delivery Information</p>
    <div className="multifields">
      <input type="text" placeholder='first Name' />
      <input type="text" placeholder='last Name' />
    </div>

    <input type="email" placeholder='Email' />
    <input type="text" placeholder='Street' />

    <div className="multifields">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State' />
    </div>

    <input type="email" placeholder='Zip Code' />
    <input type="text" placeholder='Country' />
    <input type="text" placeholder='phone' />
    

    

    </div>
  
    <div className="place-order-right">

    <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-totals-details">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
            <p>Delivery fee</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
            <p>Total</p>
            <p>${getTotalAmount()+2}</p>
          </div>
        </div>
         <button>PROCEED TO PaYMENT</button>
      </div>



    </div>
  </form>
  </>
  )
}

export default Placeorder