import React from "react";
import Header from "../layout/Header";

const Hero = ({ openContactForm }) => {

  return (
    <div className="p-4 w-full h-screen">
      <div
        className="relative w-full h-full flex flex-col text-center px-6 md:px-6 rounded-xl overflow-hidden"
        id="about"
        style={{
          backgroundImage: 'url("/hero_cohera.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Fadeout overlay at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
        
        {/* Optional overlay for better text readability */}
        {/* <div className="absolute inset-0 backdrop-blur-[0.5px]"></div> */}



        {/* Header Component */}
        <Header openContactForm={openContactForm} />

        {/* Hero Content - Positioned below navbar, matching navbar width */}
        <div className="relative z-10 flex flex-col items-center mx-auto" style={{ maxWidth: 'min(56rem, 90%)', marginTop: '10vh', paddingBottom: '35vh' }}>
          <h1 className="scto-head font-light text-gray-900 leading-snug" style={{ marginBottom: '3vh' }}>
            Transforming Autism Assessment <br className="hidden md:block" />
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

          <p className="content text-gray-700 max-w-2xl" style={{ marginTop: '3vh', marginBottom: '4vh' }}>
            From months-long waitlists to real-time results — <br className="hidden md:block" />
            empowering families and professionals to act early.
          </p>

          <button
            onClick={openContactForm}
            className="radial-cta bg-[#2B2D42] text-white px-8 md:px-10 py-3 md:py-3 roboto rounded-lg cursor-pointer font-medium text-sm md:text-xs hover:bg-[#1f2130] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            REQUEST FOR DEMO
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1"
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
