import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
      
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Shipping Information */}
        <div>
          <h3 className="text-2xl mb-4">Shipping Information</h3>
          <input type="text" placeholder="Full Name" className="input mb-4" />
          <input type="text" placeholder="Address" className="input mb-4" />
          <input type="text" placeholder="City" className="input mb-4" />
          <input type="text" placeholder="ZIP Code" className="input mb-4" />
        </div>
        
        {/* Payment Information */}
        <div>
          <h3 className="text-2xl mb-4">Payment Information</h3>
          <input type="text" placeholder="Card Number" className="input mb-4" />
          <input type="text" placeholder="Expiry Date" className="input mb-4" />
          <input type="text" placeholder="CVV" className="input mb-4" />
        </div>
        
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
