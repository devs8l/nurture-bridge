import React from 'react';

export default function CTABanner({ openContactForm }) {
  return (
    <div
      className="relative w-full rounded-xl sm:rounded-2xl my-6 sm:my-8 lg:my-10 flex flex-col justify-center h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden"
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
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col items-start gap-3 sm:gap-4 md:gap-6 max-w-2xl">
          {/* Main Heading */}
          <h2 className="banner-head !text-white !text-left text-2xl sm:text-3xl md:text-4xl break-words">
            Early Intervention<br />
            Changes Everything.
          </h2>

          {/* Description */}
          <p className="text-white/90 text-xs sm:text-sm md:text-base font-light max-w-lg break-words">
            A world where AI-powered early identification and <br className="hidden sm:block" />intervention unlock new possibilities for every <br className="hidden sm:block" />child with developmental challenges.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={openContactForm}
            className="bg-white text-gray-900 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 mt-2 sm:mt-3 rounded-md text-xs font-medium hover:bg-gray-100 transition-all duration-300 shadow-md uppercase cursor-pointer roboto flex items-center gap-2"
          >
            REQUEST FOR DEMO
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-3.5 sm:h-3.5"
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
