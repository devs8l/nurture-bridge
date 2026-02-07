import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      image: "/voice_based.png",
      title: "Voice Based Assessment",
      description: "Guided AI assessments for parents/professionals",
    },
    {
      image: "/ai-report.png",
      title: "AI Generated Report",
      description: "Real-time structured reports with deep insights.",
    },
    
  ];

  return (
    <section className="bg-white w-full px-4 sm:px-5 md:px-6 lg:px-5" id="how-it-works">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        <h2 className="section-title mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-2">How it Works</h2>
        <p className="content text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
          From months-long waitlists to real-time results — <br className="hidden sm:block" />
          empowering ambulatory professionals to act early.
        </p>
      </div>

      <div className="w-full mx-auto py-6 sm:py-8 md:py-10 px-2 sm:px-4 md:px-6 lg:px-0 flex items-center justify-center">
        {/* Cards with Image and Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="text-left py-4 sm:py-6 md:py-8 px-2">
                <h3 className="sub-head mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl break-words">{step.title}</h3>
                <p className="content text-gray-600 text-sm sm:text-base break-words">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
