import React from 'react';
import { services } from '../../data/api-status';
import StatusBadge from './status/StatusBadge';
import StatusLabel from './status/StatusLabel';

export default function StatusIndicator() {
  if (!services || services.length === 0) {
    return <div className="text-white text-center">No services available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {services.map((service) => (
        <div 
          key={service.name} 
          className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-transform hover:shadow-lg hover:scale-105 ${
            service.status === 'operational'
              ? 'border-green-500'
              : service.status === 'degraded'
              ? 'border-yellow-500'
              : 'border-red-500'
          }`}
          aria-label={`Service ${service.name}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-white">{service.name}</span>
            <div className="flex items-center gap-2">
              <StatusBadge status={service.status || 'unknown'} />
              <StatusLabel status={service.status || 'unknown'} />
            </div>
          </div>
          {service.description && (
            <div className="mt-4 text-sm text-zinc-400">
              {service.description}
              <br />
              <span>Last updated: {service.lastUpdated}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
