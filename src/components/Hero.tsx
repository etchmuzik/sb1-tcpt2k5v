import React from 'react';
import ImageSlider from './slider/ImageSlider';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Image Slider */}
      <ImageSlider />
    </div>
  );
}