import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderImage from './SliderImage';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2160&h=1080',
    title: 'Dubai in the Clouds',
    alt: 'Dramatic black and white view of Dubai skyline emerging from fog'
  },
  {
    image: 'https://images.unsplash.com/photo-1533395427226-788cee25cc7b?auto=format&fit=crop&q=80&w=2160&h=1080',
    title: 'Burj Khalifa Night',
    alt: 'Monochromatic nighttime view of Burj Khalifa and Downtown Dubai'
  },
  {
    image: 'https://images.unsplash.com/photo-1547658467-e04cd6a88901?auto=format&fit=crop&q=80&w=2160&h=1080',
    title: 'Dubai Frame',
    alt: 'High contrast architectural view of Dubai Frame and cityscape'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <SliderImage
              image={slide.image}
              title={slide.title}
              alt={slide.alt}
              overlay
              grayscale
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
          bg-black/20 hover:bg-black/40 text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
          bg-black/20 hover:bg-black/40 text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}