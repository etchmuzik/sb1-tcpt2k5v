import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  provider: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function SocialButton({ icon: Icon, provider, onClick, disabled }: SocialButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center w-full px-4 py-2 bg-black 
        border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
    >
      <Icon className="h-5 w-5 mr-3" />
      <span className="text-white">Continue with {provider}</span>
    </button>
  );
}