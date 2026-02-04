import React from 'react';

const ProductShowcase = () => {
  return (
    <div className="w-full flex justify-center relative" style={{ marginTop: '-30vh', zIndex: 20 }}>
      <div 
        className="bg-[#C1D1D766] backdrop-blur-3xl rounded-3xl overflow-hidden  p-6"
        style={{ 
          width: '70vw',
          maxWidth: '1200px'
        }}
      >
        <img 
          src="/product-ss.png" 
          alt="Product Screenshot" 
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
