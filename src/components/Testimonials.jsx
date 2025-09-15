import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Thanks to the Nurture Bridge, our family received results in just a few days. This swift clarity allowed us to take immediate action, ensuring our child gets the support they need without the long wait. We are incredibly grateful for this technology that has transformed our journey.",
            name: "Dr. Arjun Mehta",
            title: "Behavioral Psychologist",
            image: "/doc1.png" // Replace with your actual image
        },
        {
            quote: "With the help of the Nurture Bridge, we were able to receive our results in a matter of days. This quick turnaround empowered us to take prompt action, ensuring our child receives the necessary support without enduring lengthy delays. We are truly thankful for this innovative technology that has significantly improved our experience.",
            name: "Dr. Priya Kapoor",
            title: "Clinical Psychologist",
            image: "/doc2.png" // Replace with your actual image
        }
    ];

    return (
        <div className="w-full sm:w-[85%] py-10 mt-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="scto-head mb-4">
                    Testimonials
                </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative bg-white/80 rounded-xl p-8 md:p-12 border border-[#524e4946] overflow-hidden group transition-all duration-300 "
                    >
                        {/* Quote */}
                        <div className="mb-8 md:mb-10 ">
                            <p className="text-[#222836] text-[32px] font-normal leading-[40px] tracking-[-1.92px] scto">
                                "{testimonial.quote}"
                            </p>


                        </div>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 bg-[#1F212508] w-fit p-2 rounded-xl">
                            {/* Profile Image */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-gray-200">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name and Title */}
                            <div>
                                <h3 className="content text-gray-800 mb-1">
                                    {testimonial.name}
                                </h3>
                                <p className="content text-gray-600 text-sm md:text-base">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;