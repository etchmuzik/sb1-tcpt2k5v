import React from 'react';

interface DubaiSkylineProps {
  className?: string;
}

export function DubaiSkyline({ className = '' }: DubaiSkylineProps) {
  return (
    <svg className={`${className}`} viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M400 20v160m-20-80h40M350 180V60m100 120V60" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Burj Khalifa simplified outline */}
      <path 
        d="M390 180V40l20-20 20 20v140" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
      {/* Other buildings */}
      <path 
        d="M300 180V80h40v100M460 180V80h40v100" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}