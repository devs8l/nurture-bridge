import React, { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import ProductShowcase from '../components/sections/ProductShowcase'
import Incubators from '../components/sections/Incubators'
import VisionMission from '../components/sections/VisionMission'
import CTABanner from '../components/sections/CTABanner'
import HowItWorks from '../components/sections/HowItWorks'
import KeyFeatures from '../components/sections/KeyFeatures'
import UseCases from '../components/sections/UseCases'
import Partners from '../components/sections/Partners'
import Leaders from '../components/sections/Leaders'
import Testimonials from '../components/sections/Testimonials'
import Footer from '../components/layout/Footer'
import CTABannerAlt from '../components/sections/CTABannerAlt'
import EarlyIntervention from '../components/sections/EarlyIntervention'

const Home = () => {
  const formId = "3lxWpp";

  useEffect(() => {
    if (!window.Tally) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openContactForm = () => {
    if (window.Tally) {
      window.Tally.openPopup(formId, {
        layout: "modal",
        width: 700,
        overlay: true,
        hideTitle: true,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
      <Hero openContactForm={openContactForm} />
      <ProductShowcase />
      <div className="flex flex-col gap-30 px-5 sm:px-15 sm:py-5 items-center justify-center bg-white">
        <Incubators />
        {/* <CTABanner openContactForm={openContactForm} /> */}
        {/* <VisionMission /> */}
        <HowItWorks />
        <EarlyIntervention />
        {/* <KeyFeatures /> */}
        <UseCases />
        {/* <CTABannerAlt /> */}
        <Testimonials />
        {/* <Partners /> */}
        <Leaders />
      </div>
      <div className='p-4'>
        <Footer openContactForm={openContactForm} />
      </div>
    </div>
  )
}

export default Home
