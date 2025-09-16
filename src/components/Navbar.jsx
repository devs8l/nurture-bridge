import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef({});

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

  // Update indicator position when active section changes
  useEffect(() => {
    const activeButton = navRefs.current[activeSection];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeSection]);

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
    setMenuOpen(false);
  };

  const handleMouseEnter = (id) => {
    const button = navRefs.current[id];
    if (button) {
      const { offsetLeft, offsetWidth } = button;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  const handleMouseLeave = () => {
    const activeButton = navRefs.current[activeSection];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  return (
    <div className="w-full z-50 relative">
      <div className="relative flex items-center justify-between px-2 sm:px-8 py-2">
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
        <div className="hidden sm:flex fixed left-1/2 top-5 transform -translate-x-1/2 items-center gap-0 uppercase
   border-[0.5px] border-[#22283633] rounded-full px-2 py-2 
  bg-white/40 shadow-[0_4px_80px_rgba(34,40,54,0.20)] backdrop-blur-[20px] z-40 roboto  overflow-hidden">
          
          {/* Animated Background Indicator */}
          <div 
            className="absolute top-2 h-[calc(100%-16px)] bg-white rounded-full shadow-[0_4px_80px_rgba(34,40,54,0.20)] transition-all duration-500 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              transform: 'translateZ(0)', // Force hardware acceleration
              transition: 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
          
          {navLinks.map((link) => (
            <button
              key={link.id}
              ref={(el) => navRefs.current[link.id] = el}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={() => handleMouseEnter(link.id)}
              onMouseLeave={handleMouseLeave}
              className={`text-sm md:text-xs px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer relative z-10
                ${
                  activeSection === link.id
                    ? "text-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Logo (right side, not fixed) */}
        <div className="w-30 pr-[1.5rem] sm:pr-0 md:w-50 sm:mt-10 flex-shrink-0 mx-auto">
          <img
            src="/nb-logo.png"
            alt="NurtureBridge Tech Logo"
            className="w-full"
          />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`sm:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-lg text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                activeSection === link.id
                  ? "bg-gray-50  font-medium "
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
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