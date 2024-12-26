import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  theme?: 'dark' | 'light';
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  centered = true,
  className = '',
  theme = 'light'
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}