import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            quote: "Thanks to the Nurture Bridge, our family received results in just a few days. This swift clarity allowed us to take immediate action, ensuring our child gets the support they need without the long wait. We are incredibly grateful for this technology that has transformed our journey.",
            name: "Dr. Arjun Mehta",
            title: "Behavioral Psychologist",
            image: "/doc1.png"
        },
        {
            quote: "With the help of the Nurture Bridge, we were able to receive our results in a matter of days. This quick turnaround empowered us to take prompt action, ensuring our child receives the necessary support without enduring lengthy delays. We are truly thankful for this innovative technology that has significantly improved our experience.",
            name: "Dr. Priya Kapoor",
            title: "Clinical Psychologist",
            image: "/doc2.png"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                setIsAnimating(false);
            }, 300);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                );
                setIsAnimating(false);
            }, 300);
        }
    };

    return (
        <div className="w-full sm:w-[85%]" id='testimonials'>
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="section-title mb-4">
                    Testimonials
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto">
                {/* Testimonial Content - Fixed Height */}
                <div className="overflow-hidden min-h-[400px] flex flex-col justify-between">
                    <div 
                        className={`transition-opacity duration-300 ease-in-out flex-grow flex items-center justify-center ${
                            isAnimating ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        <div className="text-center px-4 md:px-12">
                            {/* Quote */}
                            <div className="mb-12">
                                <p className="testimonial-content text-gray-800 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Author Info - Fixed Position */}
                    <div className="flex flex-col items-center gap-6 pb-4">
                        <div 
                            className={`transition-opacity duration-300 ease-in-out ${
                                isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            <div className="flex items-center justify-center gap-4">
                                {/* Profile Image */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Name and Title */}
                                <div className="text-left">
                                    <p className="content !text-gray-900 mb-0 !text-base">
                                        {testimonials[currentIndex].name}
                                    </p>
                                    <p className="content !text-gray-600">
                                        {testimonials[currentIndex].title}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons - Below Author Info */}
                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                                aria-label="Previous testimonial"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-600 group-hover:text-gray-900 transition-colors"
                                >
                                    <path
                                        d="M15 18L9 12L15 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center cursor-pointer group"
                                aria-label="Next testimonial"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-600 group-hover:text-gray-900 transition-colors"
                                >
                                    <path
                                        d="M9 18L15 12L9 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;