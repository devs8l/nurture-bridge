import React, { useEffect } from 'react'
import Home from './pages/Home'
import Lenis from 'lenis'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });
  })
  return (
    <div className="bg-[#F9F6F2]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App