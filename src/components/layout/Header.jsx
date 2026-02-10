import React, { useState, useEffect, useRef } from "react";

const Header = ({ openContactForm }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const navRefs = useRef({});
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef(null);

    // Listen to scroll and set active section
    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll updates if we're programmatically scrolling
            if (isScrollingRef.current) return;

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
        { id: "about", label: "ABOUT" },
        { id: "how-it-works", label: "HOW IT WORKS" },
        { id: "solution", label: "SOLUTION" },
        { id: "testimonials", label: "TESTIMONIALS" },
    ];

    const scrollToSection = (id) => {
        // Set the active section immediately on click
        setActiveSection(id);

        // Lock scroll-based updates
        isScrollingRef.current = true;

        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        // Re-enable scroll-based updates after scroll completes
        // Smooth scroll typically takes ~1 second
        scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
        }, 1000);

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
        <>
            {/* Non-Fixed Top Bar - Logo and Contact Button */}
            <div className="relative z-20 flex items-center justify-between w-full pt-6 md:pt-6 px-4 md:px-2">
                {/* Logo */}
                <div className="flex-1 flex justify-start">
                    <img
                        src="/cohera-logo.svg"
                        alt="Cohera Logo"
                        className="h-8 md:h-12 w-auto"
                    />
                </div>

                {/* Spacer for center alignment */}
                <div className="flex-1"></div>

                {/* Contact Us Button / Mobile Menu */}
                <div className="flex-1 flex justify-end">
                    <button onClick={openContactForm} className="hidden md:block bg-[#FFFFFFCC] roboto backdrop-blur-sm text-gray-900 px-8 py-3 rounded-full text-xs font-medium hover:bg-white transition-all duration-300  uppercase cursor-pointer">
                        Contact Us
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-6 h-6"
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
            </div>

            {/* Fixed Center Navbar Only */}
            <div className="fixed top-5 md:top-10 left-1/2 transform -translate-x-1/2 z-[100]">

                <div className="hidden md:flex items-center gap-0 uppercase border-[0.5px] border-[#2228361f] rounded-full px-2 py-2 bg-[#26364B0D] shadow-[0_4px_80px_rgba(34,40,54,0.20)] backdrop-blur-[20px] roboto overflow-hidden relative">

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
                            className={`text-sm md:text-xs px-4 py-2  rounded-full transition-colors duration-300 cursor-pointer relative z-10 ${activeSection === link.id
                                ? "text-gray-900 font-medium"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="p-2 text-gray-600 hover:text-gray-900"
                        aria-label="Close Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col p-6 space-y-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-lg text-left py-3 px-4 rounded-lg transition-colors duration-200 ${activeSection === link.id
                                ? "bg-gray-50 font-medium"
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
