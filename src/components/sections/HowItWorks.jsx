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
    <section className="bg-white w-full  px-5" id="how-it-works">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="section-title mb-4">How it Works</h2>
        <p className="content text-gray-700 max-w-2xl mx-auto">
          From months-long waitlists to real-time results — <br className="hidden md:block" />
          empowering ambulatory professionals to act early.
        </p>
      </div>

      <div className="w-full mx-auto py-10 px-6 flex items-center justify-center md:px-0">
        {/* Cards with Image and Content */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="  flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="text-left  py-8">
                <h3 className="sub-head mb-3">{step.title}</h3>
                <p className="content text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
