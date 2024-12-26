import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  theme?: 'dark' | 'light';
}

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon,
  theme = 'light' 
}: FeatureCardProps) {
  return (
    <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} p-8 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-200`}>
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-zinc-800 rounded-full transform rotate-3"></div>
          <Icon className="relative h-12 w-12 text-white" />
        </div>
      </div>
      <h3 className={`text-xl font-semibold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-center ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}