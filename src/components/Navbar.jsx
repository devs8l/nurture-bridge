import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full z-50 relative">
      <div className="relative flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Mobile Menu Button (left side) */}
        <div className="flex sm:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Centered Nav Links (Desktop/Tablet) */}
        <div className="hidden sm:flex fixed left-1/2 top-5 transform -translate-x-1/2 items-center gap-6 md:gap-2 uppercase
   border-[0.5px] border-[#22283633] rounded-full px-2 py-2 
  bg-white/40 shadow-[0_4px_80px_rgba(34,40,54,0.20)] backdrop-blur-[20px] z-40 roboto">

          <a
            href="#"
            className="text-sm md:text-xs font-medium px-4 py-2 rounded-full shadow-[0_4px_80px_rgba(34,40,54,0.20)] bg-white text-gray-900 "
          >
            About
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 text-sm md:text-xs px-2 py-2  hover:text-gray-900 transition-colors"
          >
            How it works
          </a>
          <a
            href="#key-features"
            className="text-gray-600 text-sm md:text-xs px-2 py-2  hover:text-gray-900 transition-colors"
          >
            key features
          </a>
          <a
            href="#solution"
            className="text-gray-600 text-sm md:text-xs px-2 py-2 hover:text-gray-900 transition-colors"
          >
            Solution
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 text-sm md:text-xs px-2 py-2 hover:text-gray-900 transition-colors"
          >
           testimonials
          </a>
        </div>


        {/* Logo (right side, not fixed) */}
        <div className="w-24 md:w-50 mt-10 flex-shrink-0 mx-auto">
          <img
            src="/nb-logo.png"
            alt="NurtureBridge Tech Logo"
            className="w-full"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-white shadow-md border-t transform transition-all duration-300 ease-in-out origin-top 
          ${menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-4 px-6 py-6">
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            How it works
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            key features
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
             Solution
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            testimonials
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
