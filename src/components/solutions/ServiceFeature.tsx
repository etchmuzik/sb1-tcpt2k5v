import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ServiceFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tier: 'starter' | 'professional' | 'enterprise';
  specs?: string[];
}

export default function ServiceFeature({ icon: Icon, title, description, tier, specs }: ServiceFeatureProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#00FF00] transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-[#00FF00]/10 rounded-lg">
          <Icon className="h-6 w-6 text-[#00FF00]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <Badge variant={tier} className="mt-1">{tier}</Badge>
        </div>
      </div>
      
      <p className="text-zinc-400 mb-4">{description}</p>
      
      {specs && (
        <div className="border-t border-zinc-800 pt-4 mt-4">
          <h4 className="text-sm font-medium text-zinc-300 mb-2">Technical Specifications:</h4>
          <ul className="space-y-1">
            {specs.map((spec, index) => (
              <li key={index} className="text-sm text-zinc-400">• {spec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}