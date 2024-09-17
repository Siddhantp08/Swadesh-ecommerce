// import React from 'react';
// import { Star } from 'lucide-react';
// import product from '../../../../../backend/data/data';

// const ProductDetails =() => {
//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row">
//         {/* Product Image */}
//         <div className="w-full md:w-1/2">
//           <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
//         </div>

//         {/* Product Info */}
//         <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
//           <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
//           <p className="text-gray-600 mb-4">{product.description}</p>
//           <div className="flex items-center mb-4">
//             <span className="text-xl text-blue-600 font-bold">${product.price}</span>
//           </div>
//           <div className="flex items-center space-x-2 mb-4">
//             {[...Array(product.rating)].map((_, index) => (
//               <Star key={index} className="text-yellow-500" />
//             ))}
//           </div>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product, addToCart }) => {
  if (!product) {
    return <div>Product not found</div>; // Add a fallback if product is undefined
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl text-blue-600 font-bold">${product.price}</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            {[...Array(product.rating)].map((_, index) => (
              <Star key={index} className="text-yellow-500" />
            ))}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
};

ProductDetails.defaultProps = {
  product: null, // Set default prop to avoid issues if no product is passed
};

export default ProductDetails;
