import React from "react";

const useCases = [
  {
    title: "Parents",
    description: "Detect concerns early, get clear next steps",
    illustration: "/Parents.png",
  },
  {
    title: "Hospitals",
    description: "Reduce patient backlog, streamline assessments",
    illustration: "/Hospitals.png",
  },
  {
    title: "Therapy Centers",
    description: "Speed up intake, personalize care",
    illustration: "/therapy-centers.png",
  },
  {
    title: "Psychologists",
    description: "Access structured AI-powered reports",
    illustration: "/Psychologist.png",
  },
];

const UseCases = () => {
  return (
    <div className="w-full sm:w-[85%] py-12 mt-10 mx-auto sm:px-0">
      {/* Section Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="heading-helius mb-4">
          Use Cases / Solution
        </h2>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="grid grid-cols-1 gap-6">
          {/* Row 1: Parents + Hospitals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Parents */}
            <div className="relative rounded-4xl bg-[#EFB167] p-6 px-10 h-120 overflow-hidden">
              <h3 className="sub-head relative z-10">
                {useCases[0].title}
              </h3>
              <p className="content relative z-10">
                {useCases[0].description}
              </p>
              {/* <img
                src={useCases[0].illustration}
                alt={useCases[0].title}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 ob w-100 h-full pointer-events-none"
              /> */}
            </div>

            {/* Hospitals */}
            <div className="relative rounded-4xl bg-[#FFD29C] p-6 px-10 h-120 overflow-hidden">
              <h3 className="sub-head  relative z-10">
                {useCases[1].title}
              </h3>
              <p className="content relative z-10">
                {useCases[1].description}
              </p>
              {/* <img
                src={useCases[1].illustration}
                alt={useCases[1].title}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[100%] pointer-events-none"
              /> */}
            </div>
          </div>

          {/* Row 2: Psychologists */}
          <div className="relative rounded-4xl bg-[#FEDAAF] p-6 px-10 h-120 overflow-hidden">
            <h3 className="sub-head  relative z-10">
              {useCases[3].title}
            </h3>
            <p className="content relative z-10 max-w-[200px]">
              {useCases[3].description}
            </p>
            {/* <img
              src={useCases[3].illustration}
              alt={useCases[3].title}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
            /> */}
          </div>
        </div>

        {/* Right Column: Therapy Centers (Full Height) */}
        <div className="relative rounded-4xl bg-[#FFF0DE] p-6 px-10 h-full overflow-hidden flex flex-col">
          <h3 className="sub-head  relative z-10">
            {useCases[2].title}
          </h3>
          <p className="content relative z-10">
            {useCases[2].description}
          </p>
          {/* <img
            src={useCases[2].illustration}
            alt={useCases[2].title}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
