import React from 'react';

const VisionMission = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">

                {/* Vision Card */}
                <div className="relative bg-white/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 border border-[#d3d4d7]/60 overflow-hidden group transition-all duration-300">

                    <div className="relative z-10">
                        <h2 className="sub-head mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl break-words">
                            Our Vision
                        </h2>

                        <p className="content max-w-lg text-sm sm:text-base break-words">
                            A world where AI-powered early identification and intervention unlock new possibilities for every child with developmental challenges.
                        </p>
                    </div>

                    {/* Image placeholder in bottom right */}
                    <div className="absolute bottom-0 right-0 opacity-50 w-20 sm:w-24 md:w-auto">
                        <img src="/rainbow.svg" alt="" className="w-full h-auto" />
                    </div>
                </div>

                {/* Mission Card */}
                <div className="relative bg-white/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 border border-[#d3d4d7]/60 overflow-hidden group transition-all duration-300">


                    <div className="relative z-10">
                        <h2 className="sub-head mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl break-words">
                            Our Mission
                        </h2>

                        <p className="content max-w-lg text-sm sm:text-base break-words">
                            We bridge the gap between families and institutions through AI-powered solutions that transform early identification and intervention for autism and developmental challenges.
                        </p>
                    </div>

                    {/* Image placeholder in bottom right */}
                    <div className="absolute bottom-0 right-0 opacity-50 w-20 sm:w-24 md:w-auto">
                        <img src="/smily.svg" alt="" className="w-full h-auto" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisionMission;
