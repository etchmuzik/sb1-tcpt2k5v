import React from 'react';
import { Check } from 'lucide-react';

interface ServiceTierProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  sla: string;
  recommended?: boolean;
}

export default function ServiceTier({ name, description, price, features, sla, recommended }: ServiceTierProps) {
  return (
    <div className={`bg-zinc-900 border ${
      recommended ? 'border-teal' : 'border-zinc-800'
    } rounded-xl p-6 relative`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-black px-3 py-1 rounded-full text-sm font-medium">
          Recommended
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-zinc-400">/month</span>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-zinc-300">
            <Check className="h-5 w-5 text-teal" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="text-sm text-zinc-400">
        SLA: {sla}
      </div>
    </div>
  );
}