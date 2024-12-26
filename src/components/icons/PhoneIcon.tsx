import React from 'react';

interface PhoneIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function PhoneIcon({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}: PhoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Phone handset shape */}
      <path d="M4 4C4 2.89543 4.89543 2 6 2H8.5C9.60457 2 10.5 2.89543 10.5 4V8C10.5 9.10457 9.60457 10 8.5 10H6C4.89543 10 4 9.10457 4 8V4Z" />
      
      {/* Phone base */}
      <path d="M4 16C4 14.8954 4.89543 14 6 14H8.5C9.60457 14 10.5 14.8954 10.5 16V20C10.5 21.1046 9.60457 22 8.5 22H6C4.89543 22 4 21.1046 4 20V16Z" />
      
      {/* Connecting curve */}
      <path d="M10.5 5C14.5 5 19 8 19 12C19 16 14.5 19 10.5 19" />
    </svg>
  );
}