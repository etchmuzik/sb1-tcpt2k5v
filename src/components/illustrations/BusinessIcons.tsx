import React from 'react';

interface BusinessIconsProps {
  type: 'gym' | 'dental' | 'realestate';
  className?: string;
}

export function BusinessIcons({ type, className = '' }: BusinessIconsProps) {
  const icons = {
    gym: (
      <path 
        d="M40 100h120M70 80v40M130 80v40" 
        stroke="currentColor" 
        strokeWidth="2"
        strokeLinecap="round"
      />
    ),
    dental: (
      <path 
        d="M100 40c-20 0-40 30-40 80s40 40 40 40 40 10 40-40-20-80-40-80z" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
    ),
    realestate: (
      <path 
        d="M60 100v60h80v-60L100 60z" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
    )
  };

  return (
    <svg className={`${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[type]}
    </svg>
  );
}