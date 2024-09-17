// import product from '../../../../../backend/data/data';

// const ProductCard = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
//       <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
//         <p className="text-gray-500">{product.description}</p>
//         <div className="mt-3 flex justify-between items-center">
//           <span className="text-xl font-bold text-blue-600">${product.price}</span>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Add this to validate props

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
        <p className="text-gray-500">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">&#8377;{product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Add PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
