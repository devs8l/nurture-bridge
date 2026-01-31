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
            className="w-full relative overflow-hidden h-[65vh] rounded-2xl"

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
            <div className="relative z-10 w-full mx-auto px-8 md:px-16 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Section - Logo and Links */}
                    <div className="flex flex-col gap-12">
                        {/* Logo */}
                        <div>
                            <img
                                src="/cohera-logo.png"
                                alt="Cohera Logo"
                                className="h-10 w-auto"
                            />
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {/* Follow Us */}
                            <div>
                                <h3 className="text-gray-900 font-medium text-sm mb-4">Follow Us</h3>
                                <ul className="space-y-3">
                                    {socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 text-xs hover:text-gray-900 transition-colors duration-200 uppercase"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="text-gray-900 font-medium text-sm mb-4">Legal</h3>
                                <ul className="space-y-3">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                className="text-gray-600 text-xs hover:text-gray-900 transition-colors duration-200 uppercase"
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
                    <div className="flex flex-col justify-center items-start lg:items-end text-left ">
                        <div className="flex items-start justify-start flex-col">
                            <h2 className="sub-head text-gray-900 mb-6 !text-left ">
                                Request a demo and see<br />
                                the difference for yourself.
                            </h2>

                            <button
                                onClick={openContactForm}
                                className="radial-cta  text-white px-6 py-2.5 rounded-md text-xs font-medium hover:bg-[#1f2130] transition-all duration-300 shadow-md uppercase cursor-pointer roboto flex items-center gap-2"
                            >
                                REQUEST FOR DEMO
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
