import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-teal transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-teal/10 rounded-lg">
          <Icon className="h-6 w-6 text-teal" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}