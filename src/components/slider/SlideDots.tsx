import React from 'react';

interface SlideDotsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
}

export default function SlideDots({ total, current, onClick }: SlideDotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`h-2 transition-all ${
            index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
          } rounded-full`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}