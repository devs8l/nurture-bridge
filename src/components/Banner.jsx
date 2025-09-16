import React from 'react';

export default function Banner() {
  return (
    <div className="relative w-full sm:w-[85%] rounded-4xl my-20 flex flex-col justify-center h-[500px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src="/videos/nurture-about.mp4"
        autoPlay
        loop
        muted
        playsInline
      />


      

      {/* Content Container */}
      <div className="relative z-10  w-[50%] flex items-center h-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-start gap-15">
          {/* Main Heading */}
          <h1 className="!text-white scto-head !text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Because early
            <br />
            action changes
            <br />
            <span className="relative inline-block">
                        everything.
                        <img
                            src="/white-stroke.svg"
                            alt=""
                            className="absolute w-60 -bottom-4 left-1/2 -translate-x-1/2"
                        />
                    </span>
          </h1>
          
          
          {/* Call to Action Button 
          <button className="group border-[0.1px] border-white rounded-full text-white px-6 sm:px-5 py-3 sm:py-3 text-sm sm:text-base font-medium tracking-wide  transition-all cursor-pointer duration-300 ease-in-out">
            <span className="inline-block  transition-transform duration-300 content !text-white">
              Learn More About Us
            </span>
          </button>
          */}
        </div>
      </div>

      {/* Mobile Optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          .bg-cover {
            background-position: center right;
          }
        }
      `}</style>
    </div>
  );
}