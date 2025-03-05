import React from 'react';
import "../css/text-video.css";

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
      
      
    </div>
  );
};

export default HeroSection;