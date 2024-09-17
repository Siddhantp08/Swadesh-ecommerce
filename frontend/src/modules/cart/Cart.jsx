import PropTypes from 'prop-types'; // Add this to validate props
import CartItem from './CartItem';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <CartItem item={item} removeItem={removeItem} updateQuantity={updateQuantity} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400" />
          <p className="text-gray-600 mt-4">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

// Add PropTypes validation
Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;
