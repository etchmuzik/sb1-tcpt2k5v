import React from 'react';
import { playDialTone } from './DialTone';

interface DialButtonProps {
  digit: string;
  letters?: string;
  onClick: (digit: string) => void;
}

export default function DialButton({ digit, letters, onClick }: DialButtonProps) {
  const handleClick = () => {
    playDialTone(digit);
    onClick(digit);
  };

  return (
    <button
      onClick={handleClick}
      className="relative aspect-square rounded-lg bg-black border border-white/10
        hover:bg-white hover:text-black transition-all duration-200
        group flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <span className="text-2xl font-light group-hover:font-normal">{digit}</span>
        {letters && (
          <span className="text-[10px] opacity-50 group-hover:opacity-75 tracking-wider uppercase">
            {letters}
          </span>
        )}
      </div>
    </button>
  );
}