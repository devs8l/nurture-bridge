import React from 'react';

const UseCases = () => {
    const useCases = [
        {
            image: "/parents.jpg", // Replace with your actual image
            title: "Parents",
            description: "Detect concerns early, get clear next steps"
        },
        {
            image: "/hospital.jpg", // Replace with your actual image
            title: "Hospitals",
            description: "Reduce patient backlog, streamline assessments"
        },
        {
            image: "/therapy.jpg", // Replace with your actual image
            title: "Therapy Centers",
            description: "Speed up intake, personalize care"
        },
        {
            image: "/psychology.jpg", // Replace with your actual image
            title: "Psychologists",
            description: "Access structured AI-powered reports"
        }
    ];

    return (
        <div className="w-full sm:w-[85%] py-10 mt-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="heading-helius mb-4">
                    Use Cases/ Solution
                </h2>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {useCases.map((useCase, index) => (
                    <div 
                        key={index}
                        className="relative  rounded-xl  overflow-hidden group transition-all duration-300 "
                    >
                        {/* Image Container */}
                        <div className="mb-6 md:mb-8">
                            <div className="w-full h-48 md:h-90 border border-[#524e4946] bg-gray-100 rounded-lg overflow-hidden">
                                <img 
                                    src={useCase.image} 
                                    alt={useCase.title}
                                    className="w-full h-full object-cover  transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="content-head mb-3 md:mb-4">
                                {useCase.title}
                            </h3>

                            <p className="content text-sm md:text-base">
                                {useCase.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseCases;