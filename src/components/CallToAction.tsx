import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Button from './common/Button';
import { CircuitPattern } from './illustrations/CircuitPattern';

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-black via-blue-950 to-emerald-950 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <CircuitPattern className="absolute inset-0 text-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Transform Your Sales Process?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="minimal" 
            icon={ArrowRight}
            onClick={() => navigate('/free-trial')}
          >
            Get Started Now
          </Button>
          <Button 
            variant="outline" 
            icon={PlayCircle}
            onClick={() => navigate('/demo')}
          >
            Book a Free Demo
          </Button>
        </div>
      </div>
    </div>
  );
}