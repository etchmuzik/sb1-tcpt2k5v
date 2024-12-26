import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Efficiency',
    description: 'Empower your sales team to focus on higher-value activities'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a lead with round-the-clock automated engagement'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs while scaling your sales efforts'
  },
  {
    icon: Users,
    title: 'Better Engagement',
    description: 'Personalized interactions that convert more prospects'
  }
];

export default function Benefits() {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Key Benefits</h2>
          <p className="text-xl text-zinc-400">Transform your sales process with AI</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-teal/10 rounded-lg">
                    <Icon className="h-8 w-8 text-teal" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}