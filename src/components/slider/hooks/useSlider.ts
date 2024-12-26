import { useState, useEffect } from 'react';

export function useSlider(totalSlides: number, interval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);
    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide
  };
}