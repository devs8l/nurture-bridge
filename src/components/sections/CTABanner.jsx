import React from 'react';

export default function CTABanner({ openContactForm }) {
  return (
    <div
      className="relative w-full rounded-2xl my-10 flex flex-col justify-center h-[380px] overflow-hidden"
      style={{
        backgroundImage: 'url("/early_changes_bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className='w-full h-full absolute bg-[#00000050]'></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16">
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          {/* Main Heading */}
          <h2 className="banner-head !text-white !text-left">
            Early Intervention<br />
            Changes Everything.
          </h2>

          {/* Description */}
          <p className="text-white/90 text-sm md:text-base font-light max-w-lg">
            A world where AI-powered early identification and <br />intervention unlock new possibilities for every <br />child with developmental challenges.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={openContactForm}
            className="bg-white text-gray-900 px-6 py-2.5 mt-3 rounded-md text-xs font-medium hover:bg-gray-100 transition-all duration-300 shadow-md uppercase cursor-pointer roboto flex items-center gap-2"
          >
            REQUEST FOR DEMO
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
