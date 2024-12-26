import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IntegrationCategoryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function IntegrationCategory({
  icon: Icon,
  title,
  description,
  isActive = false,
  onClick
}: IntegrationCategoryProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all ${
        isActive 
          ? 'bg-[#47bda4]/10 border border-[#47bda4]'
          : 'bg-zinc-900 border border-zinc-800 hover:border-[#47bda4]'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`h-5 w-5 ${isActive ? 'text-[#47bda4]' : 'text-zinc-400'}`} />
        <h3 className="font-medium text-white">{title}</h3>
      </div>
      <p className="text-sm text-zinc-400">{description}</p>
    </button>
  );
}