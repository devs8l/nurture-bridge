// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full z-50">
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
        <div className="hidden sm:flex fixed left-1/2 top-4 transform -translate-x-1/2 items-center gap-6 md:gap-8 border rounded-full px-4 py-2 shadow bg-white/80 backdrop-blur-md z-40">
          <a
            href="#"
            className="text-sm md:text-base font-medium px-4 py-1 rounded-full bg-white text-gray-900 shadow"
          >
            Product
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm md:text-base hover:text-gray-900 transition-colors"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm md:text-base hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm md:text-base hover:text-gray-900 transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-gray-600 text-sm md:text-base hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Logo (right side, not fixed) */}
        <div className="w-24 md:w-32 lg:w-36 flex-shrink-0 ml-auto">
          <img
            src="/nb-logo.png"
            alt="NurtureBridge Tech Logo"
            className="w-full"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col space-y-4 px-6 pb-6 bg-white shadow-md border-t">
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            Product
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            Solutions
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            Resources
          </a>
          <a href="#" className="text-gray-700 text-base hover:text-gray-900">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
