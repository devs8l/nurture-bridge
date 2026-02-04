import React from 'react';

const EarlyIntervention = () => {
    return (
        <div className="w-full sm:w-[85%] ">
            {/* Section Header */}
            <div className="text-center mb-36">
                <h2 className="scto-head font-light text-gray-900 leading-snug mb-6">
                    Early Intervention <br className="hidden md:block" />
                    Changes Everything.
                </h2>
                <p className="content text-gray-700 max-w-2xl mx-auto">
                    A world where AI-powered early identification and intervention unlock <br className="hidden md:block" />
                    new possibilities for every child with developmental challenges.
                </p>
            </div>

            {/* Image Container */}
            <div className="flex justify-center items-center w-full">
                <div className="w-full overflow-hidden ">
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
