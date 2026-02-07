import React from 'react';

export default function CTABannerAlt() {
    return (
        <div className="relative w-full sm:w-[85%] my-6 sm:my-8 lg:my-10 rounded-xl flex flex-col justify-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/nurture-about-1.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className='w-full h-full absolute bg-[#00000036]'></div>


            {/* Content Container */}
            <div className="relative z-10 w-full sm:w-[85%] md:w-[70%] lg:w-[50%] flex items-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="flex flex-col items-start gap-15">
                    {/* Main Heading */}
                    <h1 className="!text-white banner-head !text-left font-light leading-tight mb-6 sm:mb-7 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">
                        Because early
                        <br />
                        action changes
                        <br />
                        <span className="relative inline-block">
                            everything.
                            <img
                                src="/white-stroke.svg"
                                alt=""
                                className="absolute w-32 sm:w-40 md:w-52 lg:w-60 -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2"
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
