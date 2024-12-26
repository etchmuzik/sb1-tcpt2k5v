import React from 'react';
import RetroDialpad from './RetroDialpad';

export default function DialpadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white text-center mb-12">
          AI Calling Assistant
        </h1>
        <RetroDialpad />
      </div>
    </div>
  );
}