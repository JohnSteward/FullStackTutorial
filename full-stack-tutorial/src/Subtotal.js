import React from 'react'
import './Subtotal.css'

function Subtotal() {
  return (
    <div className='subtotal'>
      <div className='subtotal-amount'>
        <p>Subtotal (0 items): </p>
        <strong className='price'>$0</strong>
      </div>
      
      <div className='is-a-gift'>
        <input type='checkbox' id='gift' name='gift'></input>
        <label className='gift-label' for='gift'>This order contains a gift</label>
      </div>

      <button className='proceed'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
