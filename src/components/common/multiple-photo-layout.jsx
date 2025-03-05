import React from 'react';
import "../css/focus-areas.css";

const FocusAreas = () => {
  return (
    <div className="focus-areas-grid">
      {/* Food & Beverages */}
      <div className="focus-area-item">
        <img 
          src="/api/placeholder/800/600?random=1" 
          alt="Food & Beverages" 
          className="focus-area-image"
        />
        <div className="focus-area-overlay">
          <h2 className="focus-area-title">Food & Beverages</h2>
        </div>
      </div>

      {/* Beauty & Personal Care */}
      <div className="focus-area-item">
        <img 
          src="/api/placeholder/800/600?random=2" 
          alt="Beauty & Personal Care" 
          className="focus-area-image"
        />
        <div className="focus-area-overlay">
          <h2 className="focus-area-title">Beauty & Personal Care</h2>
        </div>
      </div>

      {/* Digital & Technology */}
      <div className="focus-area-item">
        <img 
          src="/api/placeholder/800/600?random=3" 
          alt="Digital & Technology" 
          className="focus-area-image"
        />
        <div className="focus-area-overlay">
          <h2 className="focus-area-title">Digital & Technology</h2>
        </div>
      </div>

      {/* Pharmaceuticals */}
      <div className="focus-area-item">
        <img 
          src="/api/placeholder/800/600?random=4" 
          alt="Pharmaceuticals" 
          className="focus-area-image"
        />
        <div className="focus-area-overlay">
          <h2 className="focus-area-title">Pharmaceuticals</h2>
        </div>
      </div>

      {/* Nutrition & Health */}
      <div className="focus-area-item">
        <img 
          src="/api/placeholder/800/600?random=5" 
          alt="Nutrition & Health" 
          className="focus-area-image"
        />
        <div className="focus-area-overlay">
          <h2 className="focus-area-title">Nutrition & Health</h2>
        </div>
      </div>

      {/* Sustainability */}
      <div className="focus-area-item">
        <img 
          src="/api/placeholder/800/600?random=6" 
          alt="Sustainability" 
          className="focus-area-image"
        />
        <div className="focus-area-overlay">
          <h2 className="focus-area-title">Sustainability</h2>
        </div>
      </div>
    </div>
  );
};

export default FocusAreas;