import React from 'react';
import { Check } from 'lucide-react';
import Button from '../common/Button';
import { plans } from '../../data/pricing/plans';
import type { Plan } from '../../data/pricing/types';

interface PlanSelectorProps {
  onSelect: (plan: Plan) => void;
  loading: boolean;
}

export default function PlanSelector({ onSelect, loading }: PlanSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`bg-zinc-900 border ${
            plan.id === 'professional' ? 'border-teal' : 'border-zinc-800'
          } rounded-xl p-6 relative`}
        >
          {plan.id === 'professional' && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-black px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
          )}

          <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
          <p className="text-zinc-400 mb-4">{plan.description}</p>

          {plan.price ? (
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-white">
                  {plan.currency} {plan.price.toLocaleString()}
                </span>
                <span className="text-zinc-400 ml-2">/month</span>
              </div>
            </div>
          ) : (
            <div className="text-2xl font-bold text-white mb-6">Contact Sales</div>
          )}

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-zinc-300">
                <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant={plan.id === 'professional' ? 'primary' : 'secondary'}
            className="w-full"
            onClick={() => onSelect(plan)}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Select Plan'}
          </Button>
        </div>
      ))}
    </div>
  );
}