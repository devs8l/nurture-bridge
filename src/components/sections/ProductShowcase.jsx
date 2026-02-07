import React from 'react';

const ProductShowcase = () => {
  return (
    <div className="w-full flex justify-center relative px-4 sm:px-6 md:px-8" style={{ marginTop: 'clamp(-5vh, -8vh, -10vh)', zIndex: 20 }}>
      <div 
        className="bg-[#C1D1D766] backdrop-blur-3xl rounded-2xl sm:rounded-3xl overflow-hidden p-3 sm:p-4 md:p-5 lg:p-6"
        style={{ 
          width: 'min(95vw, 85vw, 70vw)',
          maxWidth: '1200px'
        }}
      >
        <img 
          src="/product-ss.png" 
          alt="Product Screenshot" 
          className="w-full h-auto rounded-xl sm:rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
