import React from 'react';
import { Mic } from 'lucide-react';
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-950 to-emerald-950 overflow-hidden">
      {/* Gradient Blob */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Voice AI for developers
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Build, test and deploy voice agents in minutes rather than months.
          </p>

          {/* Microphone Button */}
          <div className="flex justify-center mb-12">
            <button className="group relative w-24 h-24 rounded-full bg-black/30 backdrop-blur-sm
              border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-full" />
              <Mic className="w-8 h-8 text-emerald-500 mx-auto group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="minimal" className="bg-emerald-500 hover:bg-emerald-600">
              Try for free
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:border-zinc-600">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}