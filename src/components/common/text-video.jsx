import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title ">
            <span className="title-black">Passionate.</span>
            <span className="title-blue">Patient.</span>
            <span className="title-black">Progressive.</span>
          </h1>
          <p className="hero-subtitle">
            The investment office of the Harsh Mariwala family.
          </p>
        </div>
        
        <div className="hero-image-container">
          {/* Video container */}
          <div className="video-container">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="hero-video"
            >
              <source src="https://i.imgur.com/GESE22S.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }
        
        .hero-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .hero-text {
          flex: 1;
          padding-right: 2rem;
        }
        
        .hero-title {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        
        .title-black {
          color: #000;
          display: block;
        }
        
        .title-blue {
          color: #4d8bdb;
          display: block;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #333;
          margin-top: 2rem;
        }
        
        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .video-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .hero-video {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        
        /* Responsive styles */
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
          }
          
          .hero-text {
            padding-right: 0;
            margin-bottom: 3rem;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3.5rem;
          }

          .video-container {
            max-width: 450px;
            width: 90%;
          }
        }
        
        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }

          .video-container {
            max-width: 300px;
            width: 85%;
          }
        }

        @media (max-width: 480px) {
          .video-container {
            max-width: 250px;
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;