import React from 'react'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Price/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App