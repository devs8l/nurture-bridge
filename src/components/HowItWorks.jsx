import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      image: "/how-works-3.png",
      title: "Simple Screening",
      description: "Guided AI assessments for parents/professionals",
    },
    {
      image: "/how-works-2.png",
      title: "Instant Insights",
      description: "Real-time structured reports with deep insights.",
    },
    {
      image: "/how-works-1.png",
      title: "Next Steps",
      description: "Clear guidance and support programs",
    },
  ];

  return (
    <section className="bg-white rounded-3xl sm:w-[85%] py-16 mt-10 sm:py-20 sm:border border-[#d3d4d7]/60 px-5" id="how-it-works">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="section-title mb-4">How it Works</h2>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-0 text-center">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image wrapper with fixed height */}
            <div className="w-[320px] h-[320px] flex items-center justify-center mb-10">
              <img
                src={step.image}
                alt={step.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="sub-head mb-4">{step.title}</h3>

            {/* Description */}
            <p className="content max-w-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
