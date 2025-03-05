import React from 'react';
import { Linkedin, Twitter, X } from 'lucide-react';
import "../css/columns.css";

const AviralProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-grid">
        {/* Left Column - Networks */}
        <div className="column column-networks">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Networks with</h3>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <p className="stat-label">Unicorn/Soonicorn Founders</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <p className="stat-label">Top-Tier Investors</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <p className="stat-label">Large Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Profile */}
        <div className="column column-profile">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-pink-600 mb-2">Meet Aviral Bhatnagar</h1>
            <h2 className="text-xl mb-4 text-gray-700">Your Partner Through The Journey</h2>
            
            <div className="flex justify-center mb-4">
              <img 
                src="/api/placeholder/300/400" 
                alt="Aviral Bhatnagar" 
                className="profile-image"
              />
            </div>
            
            <div className="social-links">
              <a href="#" className="text-blue-600"><Linkedin /></a>
              <a href="#" className="text-black"><Twitter /></a>
              <a href="#" className="text-red-600"><X /></a>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <span className="mr-2">👁️</span>
                <span>150M+ views</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">❤️</span>
                <span>1.5M+ engagements</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">👥</span>
                <span>500K+ followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Distribution & Investing */}
        <div className="grid grid-cols-1 gap-4">
          {/* Distribution */}
          <div className="column column-distribution">
            <h3 className="font-bold text-xl mb-4 text-center">Distribution</h3>
            <div className="text-center">
              <span className="stat-number">500K+</span>
              <p className="stat-label">community built around India, startups, business and tech, with diverse storytelling formats</p>
            </div>
          </div>
          
          {/* Investing */}
          <div className="column column-investing">
            <h3 className="font-bold text-xl mb-4 text-center">Investing</h3>
            <div className="text-center">
              <span className="stat-number">3000+</span>
              <p className="stat-label">teams led across 20+ investments, and managed a startup portfolio worth 2000+ Cr</p>
            </div>
          </div>
        </div>

        {/* Institute Logos */}
        <div className="institute-logos">
          <img 
            src="/api/placeholder/50/50" 
            alt="IIT Logo" 
            className="institute-logo"
          />
          <img 
            src="/api/placeholder/50/50" 
            alt="IIM Logo" 
            className="institute-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AviralProfile;