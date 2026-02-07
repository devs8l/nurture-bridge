import React from "react";

const Footer = ({ openContactForm }) => {
    const socialLinks = [
        { name: "INSTAGRAM", url: "#" },
        { name: "LINKEDIN", url: "https://www.linkedin.com/company/nurturebridgetech/" },
        { name: "TWITTER", url: "#" },
    ];

    const legalLinks = [
        { name: "PRIVACY POLICY", url: "#" },
        { name: "TERMS OF USE", url: "#" },
    ];

    return (
        <div
            className="w-full relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:h-[65vh] rounded-xl sm:rounded-2xl"

        >
            {/* Background Image - Behind everything */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="/Footer.png"
                    alt="Footer Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Footer Content - On top */}
            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                    {/* Left Section - Logo and Links */}
                    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                        {/* Logo */}
                        <div>
                            <img
                                src="/cohera-logo.png"
                                alt="Cohera Logo"
                                className="h-8 sm:h-9 md:h-10 w-auto"
                            />
                        </div>

                        {/* Links Grid */}
                        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 grid grid-cols-2 gap-4 sm:gap-3 md:gap-2">
                            {/* Follow Us */}
                            <div>
                                <h3 className="text-gray-900 font-medium text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 text-xs hover:text-gray-900 transition-colors duration-200 uppercase break-words"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="text-gray-900 font-medium text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                className="text-gray-600 text-xs hover:text-gray-900 transition-colors duration-200 uppercase break-words"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - CTA */}
                    <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
                        <div className="flex items-start justify-start lg:justify-end flex-col gap-3 sm:gap-4 w-full">
                            <h2 className="footer-heading text-gray-900 mb-4 sm:mb-5 md:mb-6 !text-left lg:!text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words leading-snug">
                                Request a demo and see<br className="hidden sm:block" />
                                the difference for yourself.
                            </h2>

                            <button
                                onClick={openContactForm}
                                className="radial-cta text-white px-5 sm:px-6 py-2.5 sm:py-3 !rounded-full text-xs font-medium hover:bg-[#1f2130] transition-all duration-300 shadow-md uppercase cursor-pointer roboto flex items-center gap-2"
                            >
                                REQUEST FOR DEMO
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sm:w-3.5 sm:h-3.5"
                                >
                                    <path
                                        d="M3 8H13M13 8L8 3M13 8L8 13"
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
            </div>
        </div>
    );
};

export default Footer;
