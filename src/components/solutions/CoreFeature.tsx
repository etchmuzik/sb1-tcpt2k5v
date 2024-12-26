import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CoreFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  specs: {
    capacity: string;
    performance: string;
    availability: string;
  };
}

export default function CoreFeature({ icon: Icon, title, description, benefits, specs }: CoreFeatureProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-teal transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-teal-light rounded-lg">
          <Icon className="h-6 w-6 text-teal" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <p className="text-zinc-400 mb-4">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-white mb-2">Key Benefits</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-zinc-400 flex items-center gap-2">
                <span className="text-teal">•</span> {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="border-t border-zinc-800 pt-4">
          <h4 className="text-sm font-medium text-white mb-2">Technical Specifications</h4>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Capacity:</span>
              <span className="text-white">{specs.capacity}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Performance:</span>
              <span className="text-white">{specs.performance}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Availability:</span>
              <span className="text-white">{specs.availability}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}