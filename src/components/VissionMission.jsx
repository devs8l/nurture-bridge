import React from 'react';

const VisionMission = () => {
    return (
        <div className="w-full sm:w-[85%] py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                {/* Vision Card */}
                <div className="relative bg-white/80 rounded-3xl p-8 md:p-10  border border-[#d3d4d7]/60 overflow-hidden group  transition-all duration-300">

                    <div className="relative z-10">
                        <h2 className="sub-head mb-4">
                            Our Vision
                        </h2>

                        <p className="content max-w-lg">
                            A world where AI-powered early identification and intervention unlock new possibilities for every child with developmental challenges.
                        </p>
                    </div>

                    {/* Image placeholder in bottom right */}
                    <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0 opacity-50">
                        <img src="/rainbow.svg" alt="" />
                    </div>
                </div>

                {/* Mission Card */}
                <div className="relative bg-white/80 rounded-3xl p-8 md:p-10  border border-[#d3d4d7]/60 overflow-hidden group  transition-all duration-300">


                    <div className="relative z-10">
                        <h2 className="sub-head mb-4">
                            Our Mission
                        </h2>

                        <p className="content max-w-lg">
                            We bridge the gap between families and institutions through AI-powered solutions that transform early identification and intervention for autism and developmental challenges.
                        </p>
                    </div>

                    {/* Image placeholder in bottom right */}
                    <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0 opacity-50">
                        <img src="/smily.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisionMission;