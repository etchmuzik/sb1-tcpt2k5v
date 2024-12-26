import React from 'react';
import { CircuitPattern } from '../illustrations/CircuitPattern';
import { AIElements } from '../illustrations/AIElements';

interface SliderImageProps {
  image: string;
  title: string;
  alt: string;
  overlay?: boolean;
  grayscale?: boolean;
}

export default function SliderImage({ 
  image, 
  title, 
  alt,
  overlay = true, 
  grayscale = false 
}: SliderImageProps) {
  return (
    <div className="relative h-full w-full">
      {/* Base Image */}
      <img
        src={image}
        alt={alt}
        className={`h-full w-full object-cover ${
          grayscale ? 'grayscale contrast-125 brightness-110' : ''
        }`}
      />
      
      {/* Overlay with AI Elements */}
      {overlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0">
            <CircuitPattern className="absolute inset-0 text-white/5" />
            <AIElements className="absolute inset-0 text-white/10" />
          </div>
        </>
      )}
    </div>
  );
}