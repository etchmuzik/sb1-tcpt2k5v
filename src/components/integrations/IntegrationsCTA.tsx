import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

export default function IntegrationsCTA() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-4">
        Ready to integrate Beyond AI with your favorite tools?
      </h2>
      <Button
        variant="minimal"
        icon={ArrowRight}
        onClick={() => window.location.href = '/contact'}
        className="hover-button"
      >
        Get Started
      </Button>
    </div>
  );
}