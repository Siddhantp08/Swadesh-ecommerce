import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './modules/dashboard/pages/HomePage';
import ProductDetails from './modules/dashboard/pages/ProductDetails';
import Cart from './modules/cart/CartItems';
import Login from './modules/users/Login';
import Register from './modules/users/Register';
import { useState, useEffect } from 'react';
import Products from '../../backend/data/Products';
import { AuthProvider } from './modules/users/AuthContext';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  const flattenedProducts = Object.values(Products).flat();

  
  const filteredProducts = flattenedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }]);
    }
  };
  

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route
            path="/"
            element={<HomePage products={filteredProducts} addToCart={addToCart} setSearchTerm={setSearchTerm} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />

          <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
