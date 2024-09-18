
import { ChevronRight, ChevronLeft } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ProductCard from '../components/ProductCard';
import Navbar from '../../../shared/components/NavBar';
import Footer from '../../../shared/components/Footer';


import img1 from '../../../assets/holi-2416686_1280.jpg';
import img2 from '../../../assets/mehendi-4004294_1280.jpg'
import img3 from '../../../assets/peafowl-2363750_1280.jpg'; 
import img4 from '../../../assets/temple-3181803_1280.jpg'; 
import img5 from '../../../assets/woman-2178480_1280.jpg'; 

const sliderImages = [img1, img2, img3, img4, img5];

const HomePage = ({ products, addToCart,setSearchTerm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = sliderImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      
     
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderImages.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          onClick={goToPreviousSlide}
        >
          <ChevronLeft className="text-gray-700" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          onClick={goToNextSlide}
        >
          <ChevronRight className="text-gray-700" />
        </button>
      </div>

      
      <div className="container mx-auto py-6">
        <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <ProductList products={products} addToCart={addToCart} />
      </div>

      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default HomePage;
