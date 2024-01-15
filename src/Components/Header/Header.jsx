import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <header className="p-1 bg-gray-500 w-full fixed top-0 shadow-md bg-opacity-25">
        <nav className="flex justify-between items-center">
        <div className="bg-blue-500 p-1 rounded-md shadow-md">
          <Link to="/" className="text-l font-extrabold text-white">
            Anushree Medical Store
          </Link>
          {/* <p className="text-sm text-white mt-1">
            Your Trusted Source for Quality Medicines
          </p> */}
        </div>

          <div className="flex space-x-4">
            <Link to="/" className="text-blue-700 p-1  hover:text-gray-800 mx-4">
              Home
            </Link>
            <Link to="/about" className="text-blue-700 p-1 hover:text-gray-300 mx-4">
              About
            </Link>
            <Link to="/user" className="text-blue-700 p-1 hover:text-gray-300 mx-4">
              User
            </Link>
            <Link to="/contact" className="text-blue-700 p-1 hover:text-gray-300 mx-4">
              Contact
            </Link>
            <Link to="/developer" className="text-blue-700 p-1 hover:text-gray-300 mx-4">
              Developer
            </Link>
            <Link to="/cart" class="bg-blue-500 p-2 hover:bg-blue-700  text-white cart-icon">
            <FaShoppingCart />
            </Link>
            <Link to="https://www.flipkart.com" className="text-bold text-yellow-700 hover:text-gray-300 mx-4 bg-gray-200 p-1 rounded-lg shadow-md">
              Anushree Kirana Store
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
