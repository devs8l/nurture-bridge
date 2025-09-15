// Hero.jsx
import React, { useEffect } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const formId = "3lxWpp";

  useEffect(() => {
    if (!window.Tally) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openContactForm = () => {
    if (window.Tally) {
      window.Tally.openPopup(formId, {
        layout: "modal",
        width: 700,
        overlay: true,
        hideTitle: true,
      });
    }
  };

  return (
    <div className="flex flex-col items-center text-center px-4">
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center w-full  ">
        <h1 className="text-3xl md:text-5xl scto-head font-light text-gray-900 leading-snug">
          Transforming Autism Assessment <br />
          with AI-Powered{" "}
          <span className="relative inline-block">
            Precision
            <img
              src="/stroke.svg"
              alt=""
              className="absolute w-60 -bottom-3 left-1/2 -translate-x-1/2"
            />
          </span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg mt-6 mb-8">
          From months-long waitlists to real-time results — <br className="hidden md:block" />
          empowering families and professionals to act early.
        </p>

        <button
          onClick={openContactForm}
          className="bg-[#F68B1F] text-white px-10 py-3 rounded-full cursor-pointer font-medium text-sm md:text-base hover:bg-[#e17812] transition-colors"
        >
          Book a Demo
        </button>

        {/* Partner Logos */}
        <div className="mt-12">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-6">
            Our Partner Incubators & Incubators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <img src="/nsrcel.svg" alt="NSRCEL" className="h-8 md:h-12" />
            <img src="/wnf.png" alt="WNF" className="h-8 md:h-12" />
            <img src="/iihmr.png" alt="IIHMR" className="h-8 md:h-25" />
            <img src="/partner-1.png" alt="Partner 1" className="h-8 md:h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
