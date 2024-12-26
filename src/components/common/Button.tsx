import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'minimal' | 'outline';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function Button({
  variant = 'minimal',
  children,
  icon: Icon,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none";
  
  const variants = {
    minimal: "bg-teal text-black hover:bg-teal/90 active:bg-teal/80",
    outline: "border border-zinc-800 text-white hover:border-teal hover:text-teal"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {Icon && <Icon className={`h-4 w-4 ${children ? 'mr-2' : ''}`} />}
      {children}
    </button>
  );
}