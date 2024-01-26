import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const ShoppingCartIcon = () => {
    const cartItems = useSelector((state)=>state.medicine.cartItems)
  return (
      <>
      <FaShoppingCart className=" hover:text-blue-700" size={20} />
      {/* <span className='text-xs'>
          {cartItems.length}
      </span> */}
      </>
  );
};

export default ShoppingCartIcon;
