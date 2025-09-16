import React from "react";

const useCases = [
  {
    title: "Parents",
    description: "Detect concerns early, get clear next steps",
    illustration: "/Parents.svg",
  },
  {
    title: "Hospitals",
    description: "Reduce patient backlog, streamline assessments",
    illustration: "/Hospitals.svg",
  },
  {
    title: "Therapy Centers",
    description: "Speed up intake, personalize care",
    illustration: "/Therapy Centers.svg",
  },
  {
    title: "Psychologists",
    description: "Access structured AI-powered reports",
    illustration: "/Psychologists.svg",
  },
];

const UseCases = () => {
  return (
    <div className="w-full sm:w-[85%] py-10 mx-auto sm:px-0" id="solution">
      {/* Section Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="section-title mb-4">
          Use Cases / Solution
        </h2>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="grid grid-cols-1 gap-6">
          {/* Row 1: Parents + Hospitals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parents */}
            <div className="relative rounded-4xl bg-[#EFB167] flex flex-col items-center px-8 h-auto overflow-hidden">
              <div className="w-full py-6">
                <h3 className="sub-head relative z-10">
                  {useCases[0].title}
                </h3>
                <p className="content relative z-10">
                  {useCases[0].description}
                </p>
              </div>
              <img
                src={useCases[0].illustration}
                alt={useCases[0].title}
                className="w-100 h-full object-contain bottom-[-10%] relative"
              />
            </div>

            {/* Hospitals */}
            <div className="relative rounded-4xl bg-[#FFD29C] flex flex-col items-center px-10 h-auto overflow-hidden">
              <div className="w-full py-6">
                <h3 className="sub-head  relative z-10">
                  {useCases[1].title}
                </h3>
                <p className="content relative z-10">
                  {useCases[1].description}
                </p>
              </div>
              <img
                src={useCases[1].illustration}
                alt={useCases[1].title}
                className="w-100 h-full object-contain pointer-events-none relative"
              />
            </div>
          </div>

          {/* Row 2: Psychologists */}
          <div className="relative rounded-4xl bg-[#FEDAAF] flex flex-row justify-start p-6 px-10 h-60 overflow-hidden">
            <div className="w-full">

              <h3 className="sub-head  relative z-10">
                {useCases[3].title}
              </h3>
              <p className="content relative z-10 max-w-[200px]">
                {useCases[3].description}
              </p>
            </div>
            
              <img
              src={useCases[3].illustration}
              alt={useCases[3].title}
              className="h-full object-contain relative bottom-[-12%] right-[10%]"
            />
          </div>
        </div>

        {/* Right Column: Therapy Centers (Full Height) */}
        <div className="relative rounded-4xl bg-[#FFF0DE] p-6 px-10 h-full overflow-hidden flex flex-col items-center justify-between">
          <div className="w-full">
            <h3 className="sub-head  relative z-10">
              {useCases[2].title}
            </h3>
            <p className="content relative z-10">
              {useCases[2].description}
            </p>
          </div>
          <div className="w-full h-[68%]">
            <img
              src={useCases[2].illustration}
              alt={useCases[2].title}
              className="w-full h-full object-contain  pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
