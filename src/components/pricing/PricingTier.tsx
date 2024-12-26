import React from 'react';
import { Check } from 'lucide-react';
import Button from '../common/Button';
import { Plan } from '../../data/pricing/types';

interface PricingTierProps {
  plan: Plan;
  billingInterval: 'month' | 'year';
  popular?: boolean;
}

export default function PricingTier({ plan, billingInterval, popular }: PricingTierProps) {
  const price = billingInterval === 'year' ? plan.yearlyPrice : plan.price;

  return (
    <div className={`relative bg-black border ${
      popular ? 'border-teal' : 'border-zinc-800'
    } rounded-xl p-8 ${popular ? 'scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-black px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
      <p className="text-zinc-400 mb-4">{plan.description}</p>

      <div className="mb-6">
        {price ? (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">
              {plan.currency} {price.toLocaleString()}
            </span>
            <span className="text-zinc-400 ml-2">/{billingInterval}</span>
          </div>
        ) : (
          <div className="text-2xl font-bold text-white">Contact Sales</div>
        )}
        {billingInterval === 'year' && price && (
          <p className="text-sm text-teal mt-2">Save 20% with annual billing</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-zinc-300">
            <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? "primary" : "secondary"}
        className="w-full"
        href={plan.id === 'enterprise' ? '/request-quote' : '/checkout'}
      >
        {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
      </Button>
    </div>
  );
}