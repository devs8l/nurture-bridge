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
        {/* Optional overlay for better text readability */}
        {/* <div className="absolute inset-0 backdrop-blur-[0.5px]"></div> */}



        {/* Header Component */}
        <Header openContactForm={openContactForm} />

        {/* Hero Content - Positioned below navbar, matching navbar width */}
        <div className="relative z-10 flex flex-col items-center mx-auto mt-16 md:mt-35" style={{ maxWidth: 'min(56rem, 90%)' }}>
          <h1 className="scto-head font-light text-gray-900 leading-snug mb-6">
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

          <p className="mt-6 mb-8 content text-gray-700 max-w-2xl">
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
