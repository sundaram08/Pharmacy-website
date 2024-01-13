import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
        <img
            src="https://assets.1mg.com/pwa-app/production/dweb/2.0.1/static/images/illustrations/empty-cart.svg" // Replace with an image URL
            alt="Empty Cart Image"
            className="w-64 h-64 mb-4"
        />
        <div className="text-center mb-2">
            <h2 className="text-xl font-semibold mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 text-sm">Please add medicines to your cart before proceeding to checkout.</p>
        </div>
        <div className="mt-2">
            <Link to="/"  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Explore Medicines
            </Link>
        </div>

    </div>
  );
}

export default EmptyCart;
