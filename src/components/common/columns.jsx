import React from 'react';
import { Linkedin, Twitter, QrCode } from 'lucide-react';
import "../css/columns.css";

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      {/* <div className="header">
        <h1 className="title">Meet Aviral Bhatnagar</h1>
        <h2 className="subtitle">
          Your Partner<br />
          Through The<br />
          Journey
        </h2>
      </div> */}

      {/* Institute Logos */}
      {/* <div className="institute-logos">
        <img src="/iit-logo.png" alt="IIT" className="logo" />
        <img src="/iim-logo.png" alt="IIM" className="logo" />
        <span className="star">★</span>
      </div> */}

      {/* Main Grid */}
      <div className="main-grid">
        {/* Networks Column */}
        <div className="networks-section">
          <div className="networks-content">
            <h3 className="networks-title">Networks</h3>
            <p className="networks-subtitle">with</p>
            
            <div className="networks-stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-text">Unicorn/Soonicorn<br />Founders</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-text">Top-Tier Investors</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-text">Large<br />Companies</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          {/* Profile Column */}
          <div className="profile-section">
            <div className="profile-content">
              <img 
                src="https://framerusercontent.com/images/HIociBhdARHVRrDF1MnxSnMlqrQ.png?scale-down-to=1024"
                alt="Aviral Bhatnagar"
                className="profile-image"
              />
              <div className="profile-info">
                <div className="social-links">
                  <a href="#" className="social-link linkedin">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="social-link twitter">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="social-link quora">
                    <QrCode size={24} />
                  </a>
                </div>

                <div className="metrics">
                  <div className="metric-item">
                    <span role="img" aria-label="views">👁️</span>
                    <span className="metric-text"><strong>150M+</strong> views</span>
                  </div>
                  <div className="metric-item">
                    <span role="img" aria-label="engagements">❤️</span>
                    <span className="metric-text"><strong>1.5M+</strong> engagements</span>
                  </div>
                  <div className="metric-item">
                    <span role="img" aria-label="followers">👥</span>
                    <span className="metric-text"><strong>500K+</strong> followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Boxes */}
          <div className="bottom-grid">
            {/* Distribution Column */}
            <div className="distribution-section">
              <h3 className="distribution-title">Distribution</h3>
              <p className="distribution-subtitle">has grown to</p>
              <div className="distribution-number">500K+</div>
              <p className="distribution-text">
                community built around India, startups, business and tech, with diverse storytelling formats
              </p>
            </div>

            {/* Investing Section */}
            <div className="investing-section">
              <h3 className="investing-title">Investing</h3>
              <p className="investing-subtitle">experience having evaluated</p>
              <div className="investing-number">3000+</div>
              <p className="investing-text">
                teams led across<br />
                <strong>20+ investments</strong>, and<br />
                managed a startup portfolio worth <strong>2,000+ Cr</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;