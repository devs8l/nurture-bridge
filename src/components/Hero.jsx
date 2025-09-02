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
        <div className="bg-white min-h-[90vh] rounded-xl sm:w-[85%] flex flex-col-reverse lg:flex-row justify-end gap-8 sm:border border-[#524e4946]">


            {/* Left Content */}
            <div className="flex-1 hidden sm:flex  flex-col justify-center  items-start w-full   h-full lg:max-w-[60%] p-6 lg:px-17">
                <div className='flex items-center justify-center gap-8 mt-[-30px]'>
                    <div className='w-37 h-42 mb-6 hidden sm:flex'>
                        <img src="/nb-logo.png" alt="NeuroBlossom Logo" />
                    </div>
                    <div className='flex items-center justify-center almarai gap-6'>
                        <a href="#" class="text-gray-600 text-md  hover:text-gray-500 font-medium transition-colors">Product</a>
                        <a href="#" class="text-gray-600 text-md  hover:text-gray-500 font-medium transition-colors">Solutions</a>
                        <a href="#" class="text-gray-600 text-md  hover:text-gray-500 font-medium transition-colors">About</a>
                        <a href="#" class="text-gray-600 text-md  hover:text-gray-500 font-medium transition-colors">Resources</a>
                        <a href="#" class="text-gray-600 text-md  hover:text-gray-500 font-medium transition-colors">Contact</a>
                    </div>
                </div>
                <h1 className="text-3xl  heading-helius md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 relative">
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

                <div className='w-full flex flex-col-reverse sm:flex-col gap-10'>
                    <button onClick={openContactForm} className="bg-[#1F2125] cursor-pointer text-[#FFFFFFCC] w-full sm:w-[30%] px-4 py-3 md:px-8 md:py-3 text-sm rounded-md font-medium hover:bg-gray-800 transition-colors mb-8 lg:mb-16">
                        Book a Demo
                    </button>

                    {/* Partner Logos */}
                    <div className="space-y-4 almarai">
                        <p className="text-[#1F212599] text-xs mb-10 sm:mb-0">Our Partners & Incubators</p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-8">
                            <div className="w-25 h-9 md:w-40 md:h-12 rounded-full flex items-center justify-center">
                                <img src="/nsrcel.svg" alt="NSRCEL" />
                            </div>
                            <div className="w-20 h-9 md:w-20 md:h-12 rounded-full flex items-center justify-center">
                                <img src="/wnf.png" alt="Niruma Foundation" />
                            </div>
                            <div className="w-25 h-9 md:w-45 md:h-12 rounded-full flex items-center justify-center">
                                <img src="/iihmr.png" alt="IIHMR" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 overflow-hidden hidden sm:flex  w-full lg:max-w-[40%]  flex-col  justify-center items-center">
                <div className='w-33 h-33 mb-6 sm:hidden flex'>
                    <img src="/nb-logo.png" alt="NeuroBlossom Logo" />
                </div>
                <div className='p-5  w-full '>
                    <img
                        src="/nb-hero.png"
                        alt="Child in orange sweater smiling"
                        className="w-full sm:h-full h-[50vh] object-cover rounded-lg"
                    />
                    <div className='mt-[-10px] sm:hidden'>
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
                    </div>

                </div>
            </div>

            {/* mobile card */}
            <div className="flex-1 sm:hidden p-5  overflow-hidden  w-full lg:max-w-[40%] flex flex-col  justify-center items-center">
                <div className='w-33 h-33 mb-6 sm:hidden flex'>
                    <img src="/nb-logo.png" alt="NeuroBlossom Logo" />
                </div>
                <div className='p-3 min-h-[80vh] w-full flex flex-col justify-end  relative'>
                    <img
                        src="/mobile-hero.png"
                        alt="Child in orange sweater smiling"
                        className="w-full h-full absolute z-0 top-0 left-0 object-cover rounded-lg"
                    />
                    <div className='mt-[-10px] sm:hidden z-10 relative px-3'>
                        <h1 className="text-3xl heading-helius md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6 relative">
                            Transforming Autism <br className='hidden lg:block' /> Assessment with AI- <br className='hidden lg:block' />
                            Powered <span className="relative inline-block">
                                Precision
                                <img
                                    src="/white-stroke.svg"
                                    alt=""
                                    className="absolute w-60 -bottom-4 left-1/2 -translate-x-1/2"
                                />
                            </span>
                        </h1>

                        <p
                            className="text-white/80 font-[Almarai] text-[13.292px] font-normal leading-[19.333px] tracking-[0.266px] mb-8 lg:mb-12"
                        >
                            From months-long waitlists to real-time results —
                            empowering families and professionals to act early.
                        </p>

                        <button onClick={openContactForm} className="bg-white  cursor-pointer text-[#1F2125CC] w-full sm:w-[30%] px-4 py-3 md:px-8 md:py-3 text-sm rounded-md font-medium hover:bg-gray-800 transition-colors mb-8 lg:mb-16">
                            Book a Demo
                        </button>

                    </div>

                </div>
                {/* Partner Logos */}
                <div className="space-y-4 almarai py-10">
                    <p className="text-[#1F212599] text-sm mb-10 sm:mb-0">Our Partners & Incubators</p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <div className="w-25 h-9 md:w-40 md:h-12 rounded-full flex items-center justify-center">
                            <img src="/nsrcel.svg" alt="NSRCEL" />
                        </div>
                        <div className="w-20 h-9 md:w-20 md:h-12 rounded-full flex items-center justify-center">
                            <img src="/wnf.png" alt="Niruma Foundation" />
                        </div>
                        <div className="w-25 h-9 md:w-45 md:h-12 rounded-full flex items-center justify-center">
                            <img src="/iihmr.png" alt="IIHMR" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;