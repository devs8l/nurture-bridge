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
    <div className="w-full  mx-auto px-4" id="solution">
      {/* Section Heading */}
      <div className="text-center mb-26">
        <h2 className="section-title mb-4">
          Use Cases / Solution
        </h2>
      </div>

      {/* Single Row of 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
        {useCases.map((useCase, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Image Container with Background */}
            <div
              className="relative rounded-2xl overflow-hidden  flex items-end justify-center "
              style={{ backgroundColor: useCase.bgColor }}
            >
              <img
                src={useCase.illustration}
                alt={useCase.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content - Outside the card */}
            <div className="text-left">
              <h3 className="sub-head mb-1">{useCase.title}</h3>
              <p className="content text-gray-600">{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
