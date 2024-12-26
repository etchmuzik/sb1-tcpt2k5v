import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant: 'starter' | 'professional' | 'enterprise';
  className?: string;
}

export function Badge({ children, variant, className = '' }: BadgeProps) {
  const variants = {
    starter: 'bg-blue-500/10 text-blue-500',
    professional: 'bg-purple-500/10 text-purple-500',
    enterprise: 'bg-orange-500/10 text-orange-500'
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}