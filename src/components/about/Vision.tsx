import React from 'react';
import { aboutContent } from '../../data/about';

export default function Vision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">{aboutContent.mission.title}</h2>
        <p className="text-zinc-400 text-lg">{aboutContent.mission.description}</p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-transparent rounded-lg blur-xl"></div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
          alt="Team collaboration"
          className="relative rounded-lg"
        />
      </div>
    </div>
  );
}