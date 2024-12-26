import React from 'react';

interface DialDisplayProps {
  number: string;
  className?: string;
}

export default function DialDisplay({ number, className = '' }: DialDisplayProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-black border border-white/10 rounded-lg p-4">
        <input
          type="text"
          value={number}
          readOnly
          className="w-full bg-transparent text-3xl font-light text-center 
            focus:outline-none placeholder-white/20 tracking-wider"
          placeholder="Enter number"
        />
      </div>
    </div>
  );
}