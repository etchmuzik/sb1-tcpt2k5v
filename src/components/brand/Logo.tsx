import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'minimal';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const baseStyles = 'flex items-center gap-2 transition-opacity hover:opacity-90';
  
  return (
    <Link to="/" className={`${baseStyles} ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur-sm opacity-50" />
        <div className="relative bg-black p-1.5 rounded-lg border border-white/10">
          <Cpu className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {variant === 'default' && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white">Beyond AI</span>
          <span className="text-xs text-zinc-400">Automation Solutions</span>
        </div>
      )}
    </Link>
  );
}