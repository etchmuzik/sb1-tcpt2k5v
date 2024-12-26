import React from 'react';

interface CircuitPatternProps {
  className?: string;
}

export function CircuitPattern({ className = '' }: CircuitPatternProps) {
  return (
    <svg className={`${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 100h160M100 20v160M60 60l80 80M140 60l-80 80" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="8" fill="currentColor" />
      <circle cx="60" cy="60" r="4" fill="currentColor" />
      <circle cx="140" cy="60" r="4" fill="currentColor" />
      <circle cx="60" cy="140" r="4" fill="currentColor" />
      <circle cx="140" cy="140" r="4" fill="currentColor" />
    </svg>
  );
}