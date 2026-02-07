import React from "react";

const useCases = [
  {
    title: "Parents",
    description: "Detect concerns early, get clear next steps",
    illustration: "/Parents.png",
    bgColor: "#D4E5D4",
  },
  {
    title: "Hospitals",
    description: "Reduce patient backlog, streamline assessments",
    illustration: "/Hospitals.png",
    bgColor: "#E8E4DC",
  },
  {
    title: "Psychologists",
    description: "Access structured AI-powered reports",
    illustration: "/Psychologists.png",
    bgColor: "#D4E0ED",
  },
  {
    title: "Therapy Centers",
    description: "Speed up intake, personalize care",
    illustration: "/Therapy Centers.png",
    bgColor: "#CBE5DD",
  },
];

const UseCases = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-4" id="solution">
      {/* Section Heading */}
      <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-26">
        <h2 className="section-title mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-2">
          Use Cases / Solution
        </h2>
      </div>

      {/* Single Row of 4 Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mx-auto">
        {useCases.map((useCase, index) => (
          <div key={index} className="flex flex-col gap-3 sm:gap-4">
            {/* Image Container with Background */}
            <div
              className="relative rounded-xl sm:rounded-2xl overflow-hidden flex items-end justify-center aspect-square"
              style={{ backgroundColor: useCase.bgColor }}
            >
              <img
                src={useCase.illustration}
                alt={useCase.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content - Outside the card */}
            <div className="text-left px-1">
              <h3 className="sub-head mb-1 text-base sm:text-lg md:text-xl break-words">{useCase.title}</h3>
              <p className="content text-gray-600 text-sm sm:text-base break-words">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
