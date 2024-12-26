import React from 'react';
import { Check } from 'lucide-react';
import { plans } from '../../data/pricing/plans';

interface PlanSummaryProps {
  planId: string;
  interval: 'month' | 'year';
}

export default function PlanSummary({ planId, interval }: PlanSummaryProps) {
  const plan = plans.find(p => p.id === planId);
  if (!plan) return null;

  const price = interval === 'year' ? plan.yearlyPrice : plan.price;
  const savings = interval === 'year' ? 'Save 20% with annual billing' : null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
          <p className="text-zinc-400">{plan.description}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">
            {plan.currency} {price?.toLocaleString()}
            <span className="text-sm font-normal text-zinc-400">/{interval}</span>
          </div>
          {savings && (
            <div className="text-sm text-[#47bda4] mt-1">{savings}</div>
          )}
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-6">
        <h4 className="text-sm font-medium text-white mb-4">Included Features:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center text-zinc-400">
              <Check className="h-5 w-5 text-[#47bda4] mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}