import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "The Sharrp Ventures team has been a great partner in our journey. Leveraging the depth of their experience with consumer brands across stages, they have helped us at a strategic as well as tactical level with GTM, Brand strategy and other areas of Org building, which has been very valuable. They have always enabled us by opening new doors via their vast network across ecosystems.",
    name: "Pradeep and Disha Krishnakumar",
    title: "Founders",
    company: "Zouk",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
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
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Testimonials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <blockquote className="text-xl text-gray-800 leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>
          
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
            <p className="text-gray-600">{currentTestimonial.title}</p>
          </div>
          
          <div className="h-16 w-32">
            <img 
              src={currentTestimonial.logo} 
              alt={`${currentTestimonial.company} logo`} 
              className="h-full object-contain"
            />
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={goToPrevious}
              className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <img 
            src={currentTestimonial.image} 
            alt={currentTestimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;