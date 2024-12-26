import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Let AI Handle Your Calls Like a Pro!
        </h1>
        <p className="text-xl text-zinc-200 mb-8 max-w-2xl mx-auto">
          Book appointments, engage leads, and automate cold calling effortlessly with our AI Assistant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="minimal" 
            icon={Play}
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Free Demo
          </Button>
          <Button 
            variant="outline" 
            icon={ArrowRight}
            onClick={() => window.location.href = '/pricing'}
          >
            Learn More About Our AI Solutions
          </Button>
        </div>
      </div>
    </div>
  );
}