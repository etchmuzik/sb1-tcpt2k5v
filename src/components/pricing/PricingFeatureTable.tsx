import React from 'react';
import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}

const features: Feature[] = [
  {
    name: 'API Calls',
    description: 'Monthly API call limit',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Voice Minutes',
    description: 'Monthly voice processing minutes',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Custom AI Models',
    description: 'Train models on your data',
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: 'Team Members',
    description: 'Number of team seats included',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Premium Support',
    description: '24/7 priority support',
    starter: false,
    professional: true,
    enterprise: true
  }
];

export default function PricingFeatureTable() {
  return (
    <div className="mt-16 bg-black border border-zinc-800 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="py-4 px-6 text-left text-zinc-400">Feature</th>
            <th className="py-4 px-6 text-center text-zinc-400">Starter</th>
            <th className="py-4 px-6 text-center text-zinc-400">Professional</th>
            <th className="py-4 px-6 text-center text-zinc-400">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className="border-b border-zinc-800">
              <td className="py-4 px-6">
                <div>
                  <div className="font-medium text-white">{feature.name}</div>
                  <div className="text-sm text-zinc-400">{feature.description}</div>
                </div>
              </td>
              <td className="py-4 px-6 text-center">
                {feature.starter ? (
                  <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-zinc-600 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.professional ? (
                  <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-zinc-600 mx-auto" />
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.enterprise ? (
                  <Check className="h-5 w-5 text-emerald-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-zinc-600 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}