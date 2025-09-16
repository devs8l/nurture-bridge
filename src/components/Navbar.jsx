import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Listen to scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "how-it-works", "key-features", "solution", "testimonials"];
      let current = "about";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "how-it-works", label: "How it works" },
    { id: "key-features", label: "Key features" },
    { id: "solution", label: "Solution" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after click
  };

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
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm md:text-xs px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer
                ${
                  activeSection === link.id
                    ? "bg-white text-gray-900 shadow-[0_4px_80px_rgba(34,40,54,0.20)] font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.label}
            </button>
          ))}
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
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-base text-left ${
                activeSection === link.id
                  ? "text-gray-900 font-medium"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
