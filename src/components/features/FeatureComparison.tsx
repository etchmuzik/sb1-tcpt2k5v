import React from 'react';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    features: ['AI Calling', 'Basic Analytics', 'Email Support'],
    price: '500',
  },
  {
    name: 'Professional',
    features: ['AI Calling', 'Advanced Analytics', 'Priority Support', 'CRM Integration'],
    price: '1,000',
  },
  {
    name: 'Enterprise',
    features: ['Custom AI Models', 'Dedicated Support', 'API Access', 'Custom Integration'],
    price: '2,000',
  },
];

export default function FeatureComparison() {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8 mb-24">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
        Compare Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
              {plan.price} <span className="text-sm font-normal text-zinc-500">AED/month</span>
            </p>
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-zinc-700 dark:text-zinc-300">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}