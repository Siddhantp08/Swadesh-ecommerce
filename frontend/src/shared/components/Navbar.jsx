import { ShoppingCart } from "lucide-react";
import PropTypes from 'prop-types';

const Navbar = ({ cartItems = [] }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">Swadesh</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-600 transition duration-300 ease-in-out">Home</a>
          <a href="/shop" className="hover:text-blue-600 transition duration-300 ease-in-out">Shop</a>
          <a href="/about" className="hover:text-blue-600 transition duration-300 ease-in-out">About Us</a>
          <a href="/contact" className="hover:text-blue-600 transition duration-300 ease-in-out">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/cart" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </a>
          <button className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.array,
};

Navbar.defaultProps = {
  cartItems: [], // Provide default value to avoid undefined error
};

export default Navbar;
