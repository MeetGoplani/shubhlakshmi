import React, { useEffect, useRef } from 'react';
import '/Users/meetgoplani/Documents/sharppp/src/components/css/LogoCarousel.css';

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
      
      
    </div>
  );
};

export default LogoCarousel;