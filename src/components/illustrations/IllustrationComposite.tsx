import React from 'react';
import { CircuitPattern } from './CircuitPattern';
import { DubaiSkyline } from './DubaiSkyline';
import { AIElements } from './AIElements';
import { BusinessIcons } from './BusinessIcons';

interface IllustrationCompositeProps {
  businessType: 'gym' | 'dental' | 'realestate';
  className?: string;
}

export function IllustrationComposite({ businessType, className = '' }: IllustrationCompositeProps) {
  return (
    <div className={`relative aspect-video ${className}`}>
      {/* Background Layers */}
      <DubaiSkyline className="absolute inset-0 text-white/5" />
      <CircuitPattern className="absolute inset-0 text-white/10" />
      
      {/* Foreground Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          <AIElements className="absolute inset-0 text-white/20" />
          <BusinessIcons 
            type={businessType} 
            className="absolute inset-0 text-white" 
          />
        </div>
      </div>
    </div>
  );
}