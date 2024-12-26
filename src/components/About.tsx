import React from 'react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Etch</h2>
            <p className="text-xl text-gray-600">
              Etch is your personal AI assistant, helping you save time, attract customers, and boost efficiency with cutting-edge AI tools.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full animate-pulse"></div>
              <Sparkles className="relative h-32 w-32 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}