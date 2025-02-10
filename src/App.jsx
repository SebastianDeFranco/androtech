import { useState } from 'react'
import './app.css';
import Hero from './assets/Components/Hero'
import Header from './assets/Components/Header'
import Services from './assets/Components/Service'
import Testimonials from './assets/Components/Testimonials'
import Footer from './assets/Components/Footer'
import AboutUs from './assets/Components/AboutUs'
import Contact from './assets/Components/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
