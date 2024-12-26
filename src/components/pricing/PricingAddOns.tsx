import React from 'react';
import { Plus, Zap, Headphones, BookOpen } from 'lucide-react';

const addOns = [
  {
    name: 'Additional API Calls',
    description: 'Purchase extra API calls in bundles',
    price: '500',
    unit: '10,000 calls',
    icon: Zap
  },
  {
    name: 'Premium Support',
    description: 'Direct access to senior support engineers',
    price: '1,000',
    unit: 'month',
    icon: Headphones
  },
  {
    name: 'Custom Development',
    description: 'Custom features and integrations',
    price: '2,500',
    unit: '10 hours',
    icon: Plus
  },
  {
    name: 'Training Package',
    description: 'Personalized training sessions',
    price: '1,500',
    unit: 'session',
    icon: BookOpen
  }
];

export default function PricingAddOns() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {addOns.map((addon) => {
        const Icon = addon.icon;
        return (
          <div key={addon.name} className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-emerald-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-zinc-900 rounded-lg">
                <Icon className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{addon.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">{addon.description}</p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">{addon.price}</span>
                  <span className="text-zinc-400 ml-1">AED/{addon.unit}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}