import React from 'react';
import { Bot } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-blue-500/20 rounded-full blur-xl"></div>
              <Bot className="relative h-16 w-16 text-teal" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Sales Automation Services
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Scale your revenue with AI Salesman - an AI-powered Sales Assistant that works 24/7 to engage customers and boost conversions.
          </p>
          <Button variant="minimal">Get Started Now</Button>
        </div>
      </div>
    </div>
  );
}