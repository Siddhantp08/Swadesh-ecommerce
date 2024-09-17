import PropTypes from 'prop-types';

const CartItem = ({ item, removeItem, updateQuantity }) => {
  if (!item) {
    return null; // If item is undefined, don't render anything
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
      <div className="flex-1 ml-4">
        <h4 className="text-lg font-semibold text-gray-700">{item.name}</h4>
        <p className="text-gray-500">${item.price}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="text-gray-700 px-2 py-1 border rounded hover:bg-gray-200 transition-colors duration-300"
        >
          -
        </button>
        <span className="mx-2 text-lg">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="text-gray-700 px-2 py-1 border rounded hover:bg-gray-200 transition-colors duration-300"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="ml-4 text-red-600 hover:text-red-800 transition-colors duration-300"
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
