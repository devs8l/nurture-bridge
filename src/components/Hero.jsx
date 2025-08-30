import React, { useEffect } from 'react';

const Hero = () => {
    const formId = '3lxWpp'; // Your Tally form ID

    // Load Tally script
    useEffect(() => {
        if (!window.Tally) {
            const script = document.createElement('script');
            script.src = 'https://tally.so/widgets/embed.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);
    const openContactForm = () => {
        if (window.Tally) {
            window.Tally.openPopup(formId, {
                layout: 'modal',
                width: 700,
                overlay: true,
                hideTitle: true,
                autoClose: 3000,
                onSubmit: (payload) => {
                    console.log('Form submitted:', payload);
                    // Handle form submission here
                },
                onOpen: () => console.log('Form opened'),
                onClose: () => console.log('Form closed')
            });
        } else {
            console.error('Tally script not loaded yet');
        }
    };
    return (
        <div className="bg-white min-h-[90vh] rounded-lg sm:w-[90%] flex flex-col-reverse lg:flex-row items-center justify-end gap-8   border border-[#524e4946]">
            {/* Left Content */}
            <div className="flex-1 p-5 sm:p-10 sm:px-15 flex flex-col justify-center items-start w-full h-full lg:max-w-[55%] ">
                <h1 className="text-3xl heading-helius md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 relative">
                    Transforming Autism <br className='hidden lg:block' /> Assessment with AI- <br className='hidden lg:block' />
                    Powered <span className="relative inline-block">
                        Precision
                        <img
                            src="/stroke.svg"
                            alt=""
                            className="absolute w-60 -bottom-4 left-1/2 -translate-x-1/2"
                        />
                    </span>
                </h1>


                <p className="text-gray-600 almarai text-base md:text-lg leading-relaxed mb-8 lg:mb-12">
                    From months-long waitlists to real-time results — <br />empowering families and professionals to act early.
                </p>
                <div className='w-full flex flex-col-reverse sm:flex-col gap-10  '>
                    <button onClick={openContactForm} className="bg-[#1F2125] cursor-pointer text-[#FFFFFFCC] w-full sm:w-[30%] px-4 py-3 md:px-8 md:py-3 text-sm rounded-md  font-medium hover:bg-gray-800 transition-colors mb-8 lg:mb-16">
                        Book a Demo
                    </button>

                    {/* Partner Logos */}
                    <div className="space-y-4 almarai">
                        <p className="text-[#1F212599] text-sm mb-10 sm:mb-0">Our Partners & Incubators</p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-8">
                            <div className="w-25 h-9 md:w-30 md:h-12  rounded-full flex items-center justify-center">
                                <img src="/nsrcel.svg" alt="" />
                            </div><div className="w-20 h-9  md:w-16 md:h-12  rounded-full flex items-center justify-center">
                                <img src="/nf.png" alt="" />
                            </div>
                            <div className="w-25 h-9  md:w-40 md:h-12  rounded-full flex items-center justify-center">
                                <img src="/iihmr.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right Image */}
            <div className="flex-1  overflow-hidden w-full lg:max-w-[35%] sm:p-5 flex justify-center">
                <img
                    src="/nb-hero.png"
                    alt="Child in orange sweater smiling"
                    className="w-full h-full object-cover sm:rounded-lg"
                />
            </div>


        </div>
    );
};

export default Hero;