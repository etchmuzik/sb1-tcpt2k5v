import React from 'react';
import { incidents } from '../../data/api-status';
import IncidentCard from './incidents/IncidentCard';

export default function IncidentHistory() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Incident History</h2>
      <div className="space-y-6">
        {incidents.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}