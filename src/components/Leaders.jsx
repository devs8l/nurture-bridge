import React from 'react';

const Leaders = () => {
    const leaders = [
        {
            image: "/gayatri.png", // Replace with your actual image
            title: "Gayathri Ananth",
            description: "Lorem Ipsum"
        },
        {
            image: "/harini.png", // Replace with your actual image
            title: "Harini Srinivasan",
            description: "Lorem Ipsum"
        },
        {
            image: "/Gurudutt.png", // Replace with your actual image
            title: "Gurudutt Rao",
            description: "Lorem Ipsum"
        },
        {
            image: "/devjeet.png", // Replace with your actual image
            title: "Devjeet Choudhury",
            description: "Lorem Ipsum"
        }
    ];

    return (
        <div className="w-full sm:w-[85%] py-10 mt-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="heading-helius mb-4">
                    Leadership Highlight
                </h2>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {leaders.map((leaders, index) => (
                    <div 
                        key={index}
                        className="relative  rounded-xl  overflow-hidden group transition-all duration-300 "
                    >
                        {/* Image Container */}
                        <div className="mb-6 md:mb-8">
                            <div className="w-full h-48 md:h-90 border border-[#524e4946] bg-gray-100 rounded-lg overflow-hidden">
                                <img 
                                    src={leaders.image} 
                                    alt={leaders.title}
                                    className="w-full h-full object-cover  transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="content-head mb-3 md:mb-4">
                                {leaders.title}
                            </h3>

                            <p className="content text-sm md:text-base">
                                {leaders.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaders;