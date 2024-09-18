import { ShoppingCart, Search, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

const Navbar = ({ cartItems = [], setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      if (typeof setSearchTerm === 'function') {
        setSearchTerm(searchValue);
      } else {
        throw new Error("setSearchTerm must be a function");
      }
    }, 300);

    debouncedSearch();
    return () => debouncedSearch.cancel();
  }, [searchValue, setSearchTerm]);

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
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              className="input py-2 px-4 border rounded-lg"
            />
            <Search className="absolute right-2 top-2 text-gray-500" />
          </div>

          <a href="/login" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out">
            <LogIn className="w-6 h-6" />
          </a>

          <a href="/cart" className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  cartItems: PropTypes.array, 
  setSearchTerm: PropTypes.func.isRequired, 
};

export default Navbar;
