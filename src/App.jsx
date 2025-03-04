import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/navbar'
import HeroSection from './components/common/text-video'
import LogoCarousel from './components/common/LogoCarousel'

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
        <style jsx>{`
          .backing-companies {
            padding: 6rem 0;
            background-color: #f5f5f5;
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          }
          .container {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 2rem;
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 1.5rem;
              width: 100%;
            }
          }
          h1 {
            font-size: 4rem;
            font-weight: 800;
            line-height: 1.2;
            max-width: 800px;
            color: black;
          }
          .learn-more {
            background-color: #4d8bdb;
            color: white;
            padding: 1rem 2rem;
            margin-right: 140px;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .learn-more:hover {
            background-color: #3a6ca8;
          }
          @media (max-width: 1024px) {
            .container {
              padding: 0 1.5rem;
            }
            h1 {
              font-size: 3.5rem;
            }
            .learn-more {
              margin-right: 80px;
            }
          }
          @media (max-width: 768px) {
            .backing-companies {
              padding: 4rem 0;
            }
            .container {
              flex-direction: column;
              text-align: center;
              gap: 2rem;
              padding: 0 1rem;
            }
            h1 {
              font-size: 2.5rem;
              max-width: 100%;
            }
            .learn-more {
              margin-right: 0;
              padding: 0.875rem 1.75rem;
              font-size: 0.9rem;
            }
          }
          @media (max-width: 480px) {
            .backing-companies {
              padding: 3rem 0;
            }
            h1 {
              font-size: 2rem;
            }
            .learn-more {
              padding: 0.75rem 1.5rem;
              font-size: 0.85rem;
            }
          }
        `}</style>
      </section>
    </div>
  )
}

export default App
