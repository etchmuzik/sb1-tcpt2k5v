import React from 'react';
import { Upload, PhoneCall, Calendar } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Lead List',
    description: 'Simply import your contacts and let our AI handle the rest'
  },
  {
    icon: PhoneCall,
    title: 'AI Makes the Calls',
    description: 'Our assistant engages leads with natural conversations'
  },
  {
    icon: Calendar,
    title: 'Automatic Scheduling',
    description: 'Meetings are booked and synced with your calendar'
  }
];

export default function WorkflowSection() {
  return (
    <div className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-zinc-400">Simple, efficient, and effective</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-teal/10 rounded-lg">
                    <Icon className="h-8 w-8 text-teal" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-zinc-800 transform -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}