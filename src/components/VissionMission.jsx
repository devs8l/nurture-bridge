import React from 'react';

const VisionMission = () => {
    return (
        <div className="w-full sm:w-[85%] py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                {/* Vision Card */}
                <div className="relative bg-white/80 rounded-4xl p-8 md:p-10  border border-[#524e4946] overflow-hidden group  transition-all duration-300">

                    <div className="relative z-10">
                        <h2 className="sub-head mb-6 md:mb-8">
                            Our Vision
                        </h2>

                        <p className="content mb-8 max-w-lg">
                            A world where AI-powered early identification <br /> and intervention unlock new possibilities for <br /> every child with developmental challenges.
                        </p>
                    </div>

                    {/* Image placeholder in bottom right */}
                    <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0">
                        <img src="/rainbow.svg" alt="" />
                    </div>
                </div>

                {/* Mission Card */}
                <div className="relative bg-white/80 rounded-4xl p-8 md:p-10  border border-[#524e4946] overflow-hidden group  transition-all duration-300">


                    <div className="relative z-10">
                        <h2 className="sub-head mb-6 md:mb-8">
                            Our Mission
                        </h2>

                        <p className="content mb-8 max-w-lg">
                            We bridge the gap between families and institutions through <br /> AI-powered solutions that transform early identification and <br />intervention for autism and developmental challenges.
                        </p>
                    </div>

                    {/* Image placeholder in bottom right */}
                    <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0">
                        <img src="/smily.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisionMission;