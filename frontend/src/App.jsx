import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./modules/dashboard/pages/HomePage";
import ProductDetails from './modules/dashboard/pages/ProductDetails';
import Cart from './modules/cart/CartItems';
import { useState, useEffect } from 'react';
import Products from '../../backend/data/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Flatten products across all categories
  const flattenedProducts = Object.values(Products).flat();

  // Load cart items from localStorage on first render
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0)); // Remove item if quantity is 0
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        {/* Home Page where the list of product is shown */}
        <Route
          path="/"
          element={<HomePage products={flattenedProducts} addToCart={addToCart} />}
        />

        {/* Product Details Page */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              product={flattenedProducts.find(p => p.id === parseInt(window.location.pathname.split("/")[2]))}
              addToCart={addToCart}
            />
          }
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
