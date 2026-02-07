import React from 'react';

const Partners = () => {
    return (
        <div className="w-full sm:w-[85%] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-0">
            {/* Main Content Container */}
            <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-25 flex flex-col border border-[#524e4946] overflow-hidden group transition-all duration-300">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/Nurture-content.mp4" type="video/mp4" />
                </video>
                <div className='w-full h-full absolute inset-0 bg-[#000000] opacity-50 rounded-xl'>

                </div>
                {/* Main Heading */}
                <div className="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-12 relative z-10">

                    <h2 className="scto-head mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-full !text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-2 break-words leading-snug">
                        NurtureBridge Tech is an offshoot of We

                        Nurture Foundation, impacting <span className="relative inline-block">
                            1,500+ families.
                            <img
                                src="/white-stroke.svg"
                                alt=""
                                className="absolute w-32 sm:w-40 md:w-48 lg:w-60 -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2"
                            />
                        </span>
                    </h2>
                </div>

                {/* Mission Statement */}
                <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
                    <p className="content !text-white text-sm sm:text-base md:text-lg break-words">
                        A world where AI-powered early identification and intervention unlock
                        <br className="hidden sm:block" />
                        new possibilities for every child with developmental challenges.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Partners;
