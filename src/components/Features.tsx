import React from 'react';
import { PhoneOutgoing, Calendar, MessageSquare, Database } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import FeatureCard from './common/FeatureCard';

const features = [
  {
    title: 'Cold Call Automation',
    description: 'Reach out to leads efficiently and at scale.',
    icon: PhoneOutgoing,
  },
  {
    title: 'Smart Scheduling',
    description: 'Book meetings directly into your calendar.',
    icon: Calendar,
  },
  {
    title: 'Natural Conversations',
    description: 'Human-like responses to engage your leads.',
    icon: MessageSquare,
  },
  {
    title: 'Data Integration',
    description: 'Sync with your CRM for seamless tracking.',
    icon: Database,
  },
];

export default function Features() {
  return (
    <div className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Key Features" 
          subtitle="Everything you need to automate your sales outreach"
          theme="dark"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal/10 rounded-full transform -rotate-6"></div>
                    <div className="relative p-4 rounded-full">
                      <Icon className="h-8 w-8 text-teal" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}