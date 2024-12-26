import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function CTASection() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Sales Process?
        </h2>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using AI Salesman to scale their revenue
        </p>
        <Button variant="minimal" icon={ArrowRight}>
          Get Started Now
        </Button>
      </div>
    </div>
  );
}