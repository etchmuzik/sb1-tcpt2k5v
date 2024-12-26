import React from 'react';
import { ExternalLink } from 'lucide-react';

interface IntegrationCardProps {
  name: string;
  description: string;
  logo: string;
  docsUrl: string;
  certifications?: string[];
}

export default function IntegrationCard({ name, description, logo, docsUrl, certifications }: IntegrationCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#47bda4] transition-all">
      <div className="flex items-center justify-between mb-4">
        <img src={logo} alt={name} className="h-8" />
        <a 
          href={docsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#47bda4] hover:text-[#3da892] flex items-center gap-1 transition-colors"
        >
          <span>Docs</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      
      {certifications && (
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <span key={cert} className="px-2 py-1 bg-[#47bda4]/10 rounded-full text-xs text-[#47bda4]">
              {cert}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}