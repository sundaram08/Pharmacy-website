import React from 'react'
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import NonEmptyCart from './NonEmptyCart';

function Cart() {
  const cartItems = useSelector((state) => state.medicine.cartItems);
  return (
    <div className='mt-24'>
      <div className="cart">
        {cartItems.length === 0 ? 
          <EmptyCart/>
        : 
          <NonEmptyCart/>
        };
      </div>
    </div>
  )
}

export default Cart
