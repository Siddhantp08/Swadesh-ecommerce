import { Star } from 'lucide-react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Products from '../../../../../backend/data/Products';


const flattenedProducts = Object.values(Products).flat();

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  

  const selectedProduct = flattenedProducts.find(p => p.id === parseInt(id));


  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        
        <div className="w-full md:w-1/2">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-96 object-cover rounded-lg shadow-md" />
        </div>

        <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold mb-4">{selectedProduct.name}</h2>
          <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl text-blue-600 font-bold">&#8377;{selectedProduct.price}</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            {[...Array(selectedProduct.rating)].map((_, index) => (
              <Star key={index} className="text-yellow-500" />
            ))}
          </div>
          <button
            onClick={() => addToCart(selectedProduct)}
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
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
