import React from 'react';

const KeyFeatures = () => {
    const features = [
        {
            image: "/kf-1.png", // Replace with your actual image
            title: "AI Powered Screening",
            description: "Real-time insights"
        },
        {
            image: "/kf-2.png", // Replace with your actual image
            title: "Multilingual Assessments",
            description: "In families' language of comfort"
        },
        {
            image: "/kf-3.png", // Replace with your actual image
            title: "Designed for Parents & Institutions",
            description: "Dual pathways"
        },
        {
            image: "/kf-4.png", // Replace with your actual image
            title: "Actionable Guidance",
            description: "Next steps, referrals, and resources"
        }
    ];

    return (
        <div className="w-full sm:w-[85%] py-10 mt-10" id='key-features'>
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="section-title mb-4">
                    Key Features
                </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className="relative bg-white/80 rounded-3xl p-8 md:p-8 border border-[#d3d4d7]/60 overflow-hidden group transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="mb-6 md:mb-8">
                            <div className="w-full h-auto bg-gray-100 border border-[#d3d4d7]/60 rounded-lg overflow-hidden">
                                <img 
                                    src={feature.image} 
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="testimonial-content">
                                {feature.title}
                            </h3>

                            <p className="content max-w-sm">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;