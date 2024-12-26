import React, { useState, useEffect } from 'react';
import { sliderImages } from './SliderData';
import SlideImage from './SlideImage';
import SlideContent from './SlideContent';
import SlideNavigation from './SlideNavigation';
import SlideDots from './SlideDots';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {sliderImages.map((slide, index) => (
        <SlideImage
          key={slide.id}
          image={slide.image}
          alt={slide.alt}
          active={index === currentSlide}
        />
      ))}

      {/* Navigation Controls */}
      <SlideNavigation onPrev={prevSlide} onNext={nextSlide} />
      <SlideDots
        total={sliderImages.length}
        current={currentSlide}
        onClick={setCurrentSlide}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <SlideContent
          title={sliderImages[currentSlide].title}
          description={sliderImages[currentSlide].description}
        />
      </div>
    </div>
  );
}