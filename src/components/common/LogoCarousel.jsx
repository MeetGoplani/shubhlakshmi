import React, { useEffect, useRef } from 'react';

const LogoCarousel = () => {
  // Reference to the container element for the animation
  const containerRef = useRef(null);
  
  // Logo data with image paths and links
  const logos = [
    { 
      id: 1, 
      src: '/super-bottoms-logo.png', 
      alt: 'Super Bottoms', 
      link: 'https://superbottoms.com' 
    },
    { 
      id: 2, 
      src: '/boldcare-logo.png', 
      alt: 'Bold Care', 
      link: 'https://boldcare.com' 
    },
    { 
      id: 3, 
      src: '/kapiva-logo.png', 
      alt: 'Kapiva', 
      link: 'https://kapiva.com' 
    },
    { 
      id: 4, 
      src: '/cureskin-logo.png', 
      alt: 'Cureskin', 
      link: 'https://cureskin.com' 
    },
    { 
      id: 5, 
      src: '/healthkart-logo.png', 
      alt: 'Health K Art', 
      link: 'https://healthkart.com' 
    },
    { 
      id: 6, 
      src: '/power-gummies-logo.png', 
      alt: 'Power Gummies', 
      link: 'https://powergummies.com' 
    }
  ];
  
  // Clone the logos array to create a seamless loop
  const allLogos = [...logos, ...logos];
  
  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrameId;
    let currentScrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust for faster/slower scrolling
    
    const scroll = () => {
      if (scrollContainer) {
        // Increment the scroll position
        currentScrollPosition += scrollSpeed;
        
        // Apply the scroll position
        scrollContainer.scrollLeft = currentScrollPosition;
        
        // Reset scroll position when we've scrolled through the original set of logos
        if (currentScrollPosition >= (scrollContainer.scrollWidth / 2)) {
          currentScrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        }
        
        // Continue the animation
        animationFrameId = requestAnimationFrame(scroll);
      }
    };
    
    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="logo-carousel-section">
      <div className="logo-carousel-container" ref={containerRef}>
        <div className="logo-track">
          {allLogos.map((logo, index) => (
            <a 
              key={`${logo.id}-${index}`} 
              href={logo.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="logo-item"
            >
              <img src={logo.src} alt={logo.alt} />
            </a>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .logo-carousel-section {
          width: 100%;
          padding: 2rem 0;
          background-color: #fff;
          overflow: hidden;
        }
        
        .logo-carousel-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          overflow-x: hidden;
          position: relative;
        }
        
        .logo-track {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        
        .logo-item {
          flex-shrink: 0;
          width: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .logo-item:hover {
          transform: scale(1.05);
        }
        
        .logo-item img {
          max-width: 100%;
          height: auto;
          max-height: 60px;
          object-fit: contain;
        }
        
        @media (max-width: 1024px) {
          .logo-carousel-container {
            width: 95%;
            max-width: 1000px;
          }
          .logo-track {
            gap: 3rem;
          }
          
          .logo-item {
            width: 120px;
          }
          
          .logo-item img {
            max-height: 50px;
          }
        }

        @media (max-width: 768px) {
          .logo-carousel-container {
            width: 80%;
            max-width: 700px;
          }
          .logo-track {
            gap: 2rem;
          }

          .logo-item {
            width: 100px;
          }
          
          .logo-item img {
            max-height: 40px;
          }
        }

        @media (max-width: 480px) {
          .logo-carousel-container {
            width: 75%;
            max-width: 500px;
            margin-auto;
          }
          .logo-track {
            gap: 1.5rem;
          }

          .logo-item {
            width: 80px;
          }
          
          .logo-item img {
            max-height: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;