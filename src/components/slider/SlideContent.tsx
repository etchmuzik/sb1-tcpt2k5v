import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

interface SlideContentProps {
  title: string;
  description: string;
}

export default function SlideContent({ title, description }: SlideContentProps) {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-zinc-200 mb-12 max-w-3xl mx-auto">
        {description}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button 
          variant="minimal" 
          icon={ArrowRight}
          onClick={() => navigate('/free-trial')}
          className="w-full sm:w-auto min-w-[200px]"
        >
          Start Free Trial
        </Button>
        
        <Button 
          variant="outline"
          onClick={() => navigate('/demo')}
          className="w-full sm:w-auto min-w-[200px]"
        >
          Book a Demo
        </Button>
      </div>
    </div>
  );
}