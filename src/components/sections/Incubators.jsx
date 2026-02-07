import React from 'react';

const Incubators = () => {
    return (
        <div className="w-full py-12 sm:py-16 md:py-20 bg-white px-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Section Heading */}
                <h2 className="section-title text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 text-2xl sm:text-3xl md:text-4xl">
                    Meet Cohera
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-2 break-words">
                    Cohera is a revolutionary voice-based AI tool that simplifies autism assessments.
                    The AI converts parents' interaction into detailed reports that offer vital insights
                    for your psychiatric team.
                </p>

                {/* Partner Logos Section */}
                <div>
                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide text-center mb-6 sm:mb-7 md:mb-8">
                        Our institutions & Incubators
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                        <img
                            src="/nsrcel.svg"
                            alt="NSRCEL IIM Bangalore"
                            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="/wnf.png"
                            alt="We Nurture Foundation"
                            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="/iihmr.png"
                            alt="IIHMR"
                            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="/partner-1.png"
                            alt="Partner"
                            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Incubators;
