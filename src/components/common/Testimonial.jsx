import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../css/testimonial.css";

const testimonials = [
  {
    quote: "The Sharrp Ventures team has been a great partner in our journey. Leveraging the depth of their experience with consumer brands across stages, they have helped us at a strategic as well as tactical level with GTM, Brand strategy and other areas of Org building, which has been very valuable. They have always enabled us by opening new doors via their vast network across ecosystems.",
    name: "Pradeep and Disha Krishnakumar",
    title: "Founders",
    company: "Zouk",
    logo: "https://zouklife.com/cdn/shop/files/zouk-logo-new_200x.png?v=1613033110",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    quote: "Sharrp Ventures has been instrumental in our growth journey. Their strategic insights and industry connections have helped us scale our operations efficiently. The team's hands-on approach and commitment to our success have made them more than just investors.",
    name: "Aditya Sharma",
    title: "CEO",
    company: "TechInnovate",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    quote: "Working with Sharrp Ventures has transformed our business approach. Their team's expertise in consumer markets and digital transformation has given us a competitive edge. They've been true partners, offering guidance and support at every step of our journey.",
    name: "Priya Mehta",
    title: "Founder",
    company: "GreenLeaf",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-header">Testimonials</h2>
        
        <div className="testimonials-content">
          <div className="testimonials-text">
            <blockquote className="testimonial-quote">
              "{currentTestimonial.quote}"
            </blockquote>
            
            <div>
              <p className="testimonial-author">{currentTestimonial.name}</p>
              <p className="testimonial-title">{currentTestimonial.title}</p>
            </div>
            
            <div className="company-logo">
              <img 
                src={currentTestimonial.logo} 
                alt={`${currentTestimonial.company} logo`} 
              />
            </div>
            
            <div className="navigation-buttons">
              <button 
                onClick={goToPrevious}
                className="nav-button"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={goToNext}
                className="nav-button"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="testimonial-image">
            <img 
              src={currentTestimonial.image} 
              alt={currentTestimonial.name} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;