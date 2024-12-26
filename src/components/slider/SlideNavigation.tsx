import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideNavigation({ onPrev, onNext }: SlideNavigationProps) {
  const buttonClasses = `
    absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full
    bg-black/20 hover:bg-black/40 text-white transition-colors
    backdrop-blur-sm
  `;

  return (
    <>
      <button
        onClick={onPrev}
        className={`${buttonClasses} left-4`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={onNext}
        className={`${buttonClasses} right-4`}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </>
  );
}