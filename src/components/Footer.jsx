import React from 'react';

const Footer = () => {
    {/*const quickLinks = [
        "Product",
        "Solutions",
        "About",
        "Resources",
        "Contact"
    ];*/}

    const socialLinks = [
        "LinkedIn",
        //"Twitter",
        //"YouTube"
    ];

    const legalLinks = [
        "Privacy Policy",
        "Terms of Use"
    ];

    return (
        <div className="w-full sm:w-[85%] mt-10">
            <div
                className="relative bg-white border border-[#d3d4d7]/60 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
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
                    <div className="lg:col-span-5 text-center sm:text-left">
                        <h2 className="testimonial-content mb-6 md:mb-8">
                            Request a demo and

                            see <br className="hidden sm:block" /> the difference

                            for yourself.
                        </h2>



                        <button className="bg-[#F7941D] text-white rounded-full shadow-[0_4px_50px_rgba(247,148,29,0.40)] 
  helius px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium 
   transition-colors duration-300 cursor-pointer">
                            Request a Demo
                        </button>

                        <div className='w-47 h-52 hidden sm:flex'>
                            <img src="/nb-logo.png" alt="NeuroBlossom Logo" />
                        </div>
                    </div>

                    {/* Quick Links - shares remaining 55% 
                    <div className="lg:col-span-2">
                        <h3 className="testimonial-content mb-4 md:mb-6">
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
                    </div>*/}
                    {/* Legal - shares remaining 55% */}
                    <div className="lg:col-span-3">
                        <h3 className="testimonial-content mb-4 md:mb-6">
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

                    {/* Follow Us - shares remaining 55% */}
                    <div className="lg:col-span-2">
                        <h3 className="testimonial-content mb-4 md:mb-6">
                            Follow Us
                        </h3>
                        <ul className="space-y-3 md:space-y-4">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href="https://www.linkedin.com/company/nurturebridgetech/"
                                        className="content text-gray-700 hover:text-gray-900 transition-colors duration-200"
                                        target='_blank'
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full h-52 sm:hidden flex justify-center'>
                            <img src="/nb-logo.png" alt="NeuroBlossom Logo" />
                    </div>
                </div>


            </div>
            <div className="w-full text-center content mt-5">
                <p>
                    © Copyright 2025. Nurture Bridge Tech. All Rights Reserved.
                </p>
            </div>

        </div>
    );
};

export default Footer;