import React from 'react'
import Hero from '../components/Hero'
import VisionMission from '../components/VissionMission'
import Banner from '../components/Banner'
import HowItWorks from '../components/HowItWorks'
import KeyFeatures from '../components/KeyFeatures'
import UseCases from '../components/UseCases'
import NurtureContent from '../components/NurtureContent'
import Leaders from '../components/Leaders'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import BannerSecond from '../components/BannerSecond'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="flex flex-col sm:py-10 items-center justify-center min-h-screen bg-[#fff]">
      <Navbar />
      <Hero />
      <Banner />
      <VisionMission />
      <HowItWorks />
      <KeyFeatures />
      <UseCases />
      <BannerSecond />
      <Testimonials />
      <NurtureContent />
      <Leaders />
      <Footer />
    </div>
  )
}

export default Home