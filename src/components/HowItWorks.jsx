import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            shape: "/triangle.svg", 
            title: "Simple Screening",
            description: "Guided AI assessments for parents/professionals"
        },
        {
            shape: "/rhombus.svg",
            title: "Instant Insights",
            description: "Real-time structured reports"
        },
        {
            shape: "/penta.svg", 
            title: "Next Steps",
            description: "Clear guidance and support programs"
        }
    ];

    return (
        <div className="w-full sm:w-[85%] py-10 mt-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="heading-helius mb-4">
                    How it Works
                </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:gap-8">
                {steps.map((step, index) => (
                    <div 
                        key={index}
                        className="relative bg-white/80 rounded-xl flex items-start justify-center p-8 md:p-8 border border-[#524e4946] overflow-hidden group transition-all duration-300 gap-10 "
                    >
                        {/* Shape Icon */}
                        <div className="">
                            <div className="w-16 h-16 md:w-30 md:h-30 ">
                                <img 
                                    src={step.shape} 
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 mt-4 ">
                            <h3 className="content-head  mb-4 md:mb-4">
                                {step.title}
                            </h3>

                            <p className="content max-w-sm">
                                {step.description}
                            </p>
                        </div>

                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;