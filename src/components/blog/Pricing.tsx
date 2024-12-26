import React from 'react';
import { Check } from 'lucide-react';
import Button from '../common/Button';

const plans = [
  {
    name: 'Starter',
    price: '499',
    features: [
      'Up to 1,000 calls/month',
      'Basic analytics',
      'Email support',
      'Standard integrations'
    ]
  },
  {
    name: 'Professional',
    price: '999',
    features: [
      'Up to 5,000 calls/month',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited calls',
      'Custom AI models',
      'Dedicated support',
      'Custom development',
      'SLA guarantees'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
          <p className="text-xl text-zinc-400">Choose the plan that fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-black border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                </span>
                {plan.price !== 'Custom' && <span className="text-zinc-400">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-400">
                    <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="minimal" className="w-full">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}