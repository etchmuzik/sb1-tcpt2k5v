import React from 'react';
import { Bot, Zap, Star } from 'lucide-react';
import Button from '../common/Button';

const tiers = [
  {
    name: 'Starter',
    price: '2,500',
    features: [
      'Email & SMS Automation',
      'Basic Lead Scoring',
      'Simple Scheduling',
      'Standard Analytics',
      '5 Automation Workflows',
      'Email Support'
    ],
    icon: Bot,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: '5,000',
    features: [
      'All Starter features',
      'Voice AI Integration',
      'Advanced Lead Scoring',
      'CRM Integration',
      'Custom Workflows',
      'Priority Support'
    ],
    icon: Zap,
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Professional features',
      'Custom AI Models',
      'Dedicated Account Manager',
      'API Access',
      'Custom Integrations',
      '24/7 Support'
    ],
    icon: Star,
    cta: 'Contact Sales'
  }
];

export default function ServiceTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier) => {
        const Icon = tier.icon;
        return (
          <div key={tier.name} className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Icon className="h-6 w-6 text-emerald-500" />
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-3xl font-bold text-white">
                {tier.price} <span className="text-sm font-normal text-zinc-400">AED/month</span>
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center text-zinc-300">
                  <span className="mr-2 text-emerald-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="minimal" className="w-full bg-emerald-500 hover:bg-emerald-600">
              {tier.cta}
            </Button>
          </div>
        );
      })}
    </div>
  );
}