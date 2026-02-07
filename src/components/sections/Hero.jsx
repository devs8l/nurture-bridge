import React from "react";
import Header from "../layout/Header";

const Hero = ({ openContactForm }) => {

  return (
    <div className="p-2 sm:p-3 lg:p-4 w-full h-screen">
      <div
        className="relative w-full h-full flex flex-col text-center px-4 sm:px-5 md:px-6 rounded-xl overflow-hidden"
        id="about"
        style={{
          backgroundImage: 'url("/hero_cohera.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Fadeout overlay at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 lg:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
        
        {/* Optional overlay for better text readability */}
        {/* <div className="absolute inset-0 backdrop-blur-[0.5px]"></div> */}



        {/* Header Component */}
        <Header openContactForm={openContactForm} />

        {/* Hero Content - Positioned below navbar, matching navbar width */}
        <div className="relative z-10 flex flex-col items-center mx-auto px-4 sm:px-6" style={{ maxWidth: 'min(56rem, 95%)', marginTop: 'clamp(5vh, 8vh, 10vh)', paddingBottom: 'clamp(15vh, 25vh, 35vh)' }}>
          <h1 className="scto-head font-light text-gray-900 leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ marginBottom: 'clamp(2vh, 2.5vh, 3vh)' }}>
            Transforming Autism Assessment <br className="hidden sm:block" />
            with AI-Powered{" "}
            <span className="relative inline-block">
              Precision.
              {/* <img
                src="/stroke.svg"
                alt=""
                className="absolute w-40 md:w-60 -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2"
              /> */}
            </span>
          </h1>
          {/* Hero Description */}
          <p className="content text-gray-700 max-w-2xl text-sm sm:text-base md:text-lg px-2" style={{marginBottom: 'clamp(2vh, 2.5vh, 3vh)' }}>
            From months-long waitlists to real-time results — <br className="hidden sm:block" />
            empowering families and professionals to act early.
          </p>

          <button
            onClick={openContactForm}
            className="radial-cta bg-[#2B2D42] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3 roboto !rounded-full cursor-pointer font-medium text-xs sm:text-sm md:text-xs hover:bg-[#1f2130] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            REQUEST FOR DEMO
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1 sm:w-4 sm:h-4"
            >
              <path
                d="M8 3L13 8L8 13M13 8H3"
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
};

export default Hero;
