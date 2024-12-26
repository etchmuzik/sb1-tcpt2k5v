import React from 'react';
import { benefits } from '../../data/careers';

export default function CareerBenefits() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Why Join Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal/10 rounded-lg">
                  <Icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-zinc-400">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}