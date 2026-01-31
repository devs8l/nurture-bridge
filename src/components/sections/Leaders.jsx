import React from 'react';

const Leaders = () => {
    const leaders = [
        {
            image: "/gayatri_bit.png", // Replace with your actual image
            title: "Gayathri Ananth",
            description: "Founding Member & Chief Executive Officer"
        },
        {
            image: "/Harini_bit.png", // Replace with your actual image
            title: "Harini Srinivasan",
            description: "Founding Member & Chief of Operations"
        },
        {
            image: "/Harshit_bit.png", // Replace with your actual image
            title: "Harshit Pandey",
            description: "Founding Member & Chief of Strategy"
        },
        {
            image: "/devjeet_bit.png", // Replace with your actual image
            title: "Devjeet Choudhury",
            description: "Founding Member & Chief of Technology"
        }
    ];

    return (
        <div className="w-full  py-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="section-title mb-4">
                    Leadership Highlight
                </h2>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-15">
                {leaders.map((leaders, index) => (
                    <div
                        key={index}
                        className="relative  rounded-xl  overflow-hidden group transition-all duration-300 "
                    >
                        {/* Image Container */}
                        <div className="mb-6 md:mb-4">
                            <div className="w-full h-full border border-[#524e4946] bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={leaders.image}
                                    alt={leaders.title}
                                    className="w-full h-full object-cover  transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="sub-head mb-1">
                                {leaders.title}
                            </h3>

                            <p className="content text-gray-600">
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