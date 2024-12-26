import React from 'react';

interface AIElementsProps {
  className?: string;
}

export function AIElements({ className = '' }: AIElementsProps) {
  return (
    <svg className={`${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Binary code background */}
      <text 
        x="10" 
        y="20" 
        className="text-[8px] opacity-20" 
        fill="currentColor"
      >
        10110101
      </text>
      {/* Neural network nodes */}
      <g className="opacity-80">
        <circle cx="60" cy="100" r="4" fill="currentColor" />
        <circle cx="140" cy="80" r="4" fill="currentColor" />
        <circle cx="140" cy="120" r="4" fill="currentColor" />
        <line x1="60" y1="100" x2="140" y2="80" stroke="currentColor" strokeWidth="1" />
        <line x1="60" y1="100" x2="140" y2="120" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}