import React from 'react';
import StatusIndicator from '../components/api-status/StatusIndicator';
import IncidentHistory from '../components/api-status/IncidentHistory';
import MetricsDisplay from '../components/api-status/MetricsDisplay';

export default function ApiStatus() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">System Status</h1>
          <p className="text-xl text-zinc-400">
            Current status of Beyond AI services and API endpoints
          </p>
        </div>
        <StatusIndicator />
        <MetricsDisplay />
        <IncidentHistory />
      </div>
    </div>
  );
}