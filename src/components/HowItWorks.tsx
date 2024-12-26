import React from 'react';
import { Upload, PhoneCall, CalendarCheck } from 'lucide-react';

const steps = [
  {
    title: 'Upload Your Lead List',
    description: 'Simply import your contacts and let our AI handle the rest.',
    icon: Upload,
  },
  {
    title: 'AI Makes the Calls',
    description: 'Our assistant engages leads with natural conversations.',
    icon: PhoneCall,
  },
  {
    title: 'Automatic Scheduling',
    description: 'Meetings are booked and synced with your calendar.',
    icon: CalendarCheck,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#47bda4]/10 rounded-full transform -rotate-6"></div>
                    <Icon className="relative h-16 w-16 text-[#47bda4]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-zinc-800 transform -translate-y-1/2 -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}