import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      image: "/screening.png",
      title: "Simple Screening",
      description: "Guided AI assessments for parents/professionals",
    },
    {
      image: "/insights.png",
      title: "Instant Insights",
      description: "Real-time structured reports with deep insights.",
    },
    {
      image: "/next_steps.png",
      title: "Next Steps",
      description: "Clear guidance and support programs",
    },
  ];

  return (
    <section className="bg-white w-full py-16 sm:py-20 px-5" id="how-it-works">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="section-title mb-4">How it Works</h2>
      </div>

      <div className="w-full mx-auto py-10 px-6 md:px-0">
        {/* Cards with Image and Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F1F4F8] border border-gray-200/60 rounded-xl overflow-hidden flex flex-col justify-between"
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
              <div className="text-left px-8 py-8">
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
