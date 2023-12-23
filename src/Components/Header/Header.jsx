import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <header className="bg-blue-500 p-4 shadow-md">
        <nav className="flex justify-between items-center">
        <div className="bg-blue-500 p-4 rounded-md shadow-md">
          <Link to="/" className="text-2xl font-extrabold text-white">
            Anushree Medical Store
          </Link>
          <p className="text-sm text-white mt-1">
            Your Trusted Source for Quality Medicines
          </p>
        </div>

          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300 mx-4">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 mx-4">
              About
            </Link>
            <Link to="/user" className="text-white hover:text-gray-300 mx-4">
              User
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 mx-4">
              Contact
            </Link>
            <Link to="/developer" className="text-white hover:text-gray-300 mx-4">
              Developer
            </Link>
            <Link to="/cart" class="bg-blue-500 p-1 hover:bg-blue-700 text-white cart-icon">
            <FaShoppingCart />
            </Link>
            <Link to="https://www.flipkart.com" className="text-bold text-yellow-700 hover:text-gray-300 mx-4 bg-gray-200 p-2 rounded-lg shadow-md">
              Anushree Kirana Store
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
