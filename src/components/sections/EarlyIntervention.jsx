import React from 'react';

const EarlyIntervention = () => {
    return (
        <div className="w-full sm:w-[85%] px-4 sm:px-6 lg:px-0">
            {/* Section Header */}
            <div className="text-center mb-16 sm:mb-24 md:mb-28 lg:mb-36">
                <h2 className="scto-head font-light text-gray-900 leading-snug mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2">
                    Early Intervention <br className="hidden sm:block" />
                    Changes Everything.
                </h2>
                <p className="content text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                    A world where AI-powered early identification and intervention unlock <br className="hidden sm:block" />
                    new possibilities for every child with developmental challenges.
                </p>
            </div>

            {/* Image Container */}
            <div className="flex justify-center items-center w-full">
                <div className="w-full overflow-hidden">
                    <img 
                        src="/Chat-showcase.png" 
                        alt="Early Intervention Demo" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default EarlyIntervention;
