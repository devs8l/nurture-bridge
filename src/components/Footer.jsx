import React from 'react';

const Footer = () => {
    const quickLinks = [
        "Product",
        "Solutions",
        "About",
        "Resources",
        "Contact"
    ];

    const socialLinks = [
        "LinkedIn",
        "Twitter",
        "YouTube"
    ];

    const legalLinks = [
        "Privacy Policy",
        "Terms of Use"
    ];

    return (
        <div className="w-full sm:w-[85%] mt-10 mb-20">
            <div
                className="relative bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-300 border border-[#524e4946] rounded-xl p-8 md:p-12 lg:p-16 overflow-hidden"
                style={{
                    backgroundImage: `url('/gradient.png')`, // Replace with your actual background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* CTA Section - 45% width */}
                    <div className="lg:col-span-5">
                        <h2 className=" text-[#1F2125] helius text-[48px] font-normal leading-[56px] tracking-[-0.96px] mb-6 md:mb-8">
                            Request a demo and
                            <br className="hidden sm:block" />
                            see the difference
                            <br className="hidden sm:block" />
                            for yourself.
                        </h2>


                        <button className="bg-[#1F2125] text-[#FFFFFFCC] helius px-6 md:px-8 py-3 md:py-4 rounded-md text-sm md:text-base font-medium hover:bg-gray-700 transition-colors duration-300">
                            Request a Demo
                        </button>
                    </div>

                    {/* Quick Links - shares remaining 55% */}
                    <div className="lg:col-span-2">
                        <h3 className="content-head text-gray-800 mb-4 md:mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="content text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us - shares remaining 55% */}
                    <div className="lg:col-span-2">
                        <h3 className="content-head text-gray-800 mb-4 md:mb-6">
                            Follow Us
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="content text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal - shares remaining 55% */}
                    <div className="lg:col-span-3">
                        <h3 className="content-head text-gray-800 mb-4 md:mb-6">
                            Legal
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="content text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;