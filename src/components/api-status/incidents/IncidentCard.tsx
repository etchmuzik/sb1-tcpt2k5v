import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import type { Incident } from '../../../data/api-status';

interface IncidentCardProps {
  incident: Incident;
}

export default function IncidentCard({ incident }: IncidentCardProps) {
  return (
    <div className="border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          {incident.status === 'resolved' ? (
            <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
          ) : (
            <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
          )}
          <h3 className="text-white font-medium">{incident.title}</h3>
        </div>
        <span className="text-sm text-zinc-400">{incident.date}</span>
      </div>
      <p className="text-zinc-400 text-sm mb-2">{incident.description}</p>
      <div className="text-sm text-zinc-500">
        Duration: {incident.duration}
      </div>
    </div>
  );
}