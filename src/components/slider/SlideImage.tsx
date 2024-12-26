import React from 'react';

interface SlideImageProps {
  image: string;
  alt: string;
  active: boolean;
}

export default function SlideImage({ image, alt, active }: SlideImageProps) {
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-1000 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover filter grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
    </div>
  );
}