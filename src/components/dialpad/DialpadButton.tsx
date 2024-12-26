import React from 'react';

interface DialpadButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function DialpadButton({ children, onClick }: DialpadButtonProps) {
  return (
    <button
      onClick={onClick}
      className="aspect-square rounded-lg bg-zinc-900 text-white text-2xl font-medium hover:bg-zinc-800 transition-colors duration-200 flex items-center justify-center"
    >
      {children}
    </button>
  );
}