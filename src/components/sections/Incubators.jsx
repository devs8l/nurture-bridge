import React from 'react';

const Incubators = () => {
    return (
        <div className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section Heading */}
                <h2 className="section-title text-center mb-16">
                    Meet Cohera
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
                    Cohera is a revolutionary voice-based AI tool that simplifies autism assessments.
                    The AI converts parents' interaction into detailed reports that offer vital insights
                    for your psychiatric team.
                </p>

                {/* Partner Logos Section */}
                <div>
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide text-center mb-8">
                        Our institutions & Incubators
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                        <img
                            src="/nsrcel.svg"
                            alt="NSRCEL IIM Bangalore"
                            className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="/wnf.png"
                            alt="We Nurture Foundation"
                            className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="/iihmr.png"
                            alt="IIHMR"
                            className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                        <img
                            src="/partner-1.png"
                            alt="Partner"
                            className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Incubators;
