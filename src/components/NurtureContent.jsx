import React from 'react';

const NurtureContent = () => {
    return (
        <div className="w-full sm:w-[85%] py-10 mt-10">
            {/* Main Content Container */}
            <div className="relative rounded-4xl p-8 md:p-25 flex flex-col  border border-[#524e4946] overflow-hidden group transition-all duration-300">
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
                <div className="text-center mb-8 md:mb-12 relative z-10">
                    
                    <h2 className="scto-head mb-6 w-full md:mb-8 leading-tight !text-white">
                        NurtureBridge Tech is an offshoot of We 
                        <br className="hidden sm:block" />
                        Nurture Foundation, impacting <span className="relative inline-block">
                        1,500+ families.
                        <img
                            src="/white-stroke.svg"
                            alt=""
                            className="absolute w-60 -bottom-4 left-1/2 -translate-x-1/2"
                        />
                    </span>
                    </h2>
                </div>

                {/* Mission Statement */}
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <p className="content text-lg md:text-xl leading-relaxed !text-white">
                        A world where AI-powered early identification and intervention unlock 
                        <br className="hidden md:block" />
                        new possibilities for every child with developmental challenges.
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default NurtureContent;