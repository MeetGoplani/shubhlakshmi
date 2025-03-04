import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/navbar'
import HeroSection from './components/common/text-video'
import LogoCarousel from './components/common/LogoCarousel'
import SharpVenturesComplete from './components/common/multiple-photo-layout'
import Testimonial from './components/common/Testimonial'
import TestimonialCarousel from './components/common/Testimonial'
import Testimonials from './components/common/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <main className="main-content" style={{ backgroundColor: 'white' }}>
        <HeroSection />
      </main>
      <LogoCarousel />
      <section className="backing-companies mt-10">
        <div className="container">
          <h1>Backing companies that<br />are shaping new age<br />consumerism in India.</h1>
          <button className="learn-more">LEARN ABOUT US <span className="arrow-icon">↗</span></button>
        </div>
      </section>
      <SharpVenturesComplete />
      <h1>xnjdkfngdjngd</h1>
      <Testimonials  />
    </div>
  )
}

export default App
