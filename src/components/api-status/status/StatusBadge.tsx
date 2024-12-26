import React from 'react';
import { ServiceStatus } from '../../../data/api-status';

interface StatusBadgeProps {
  status: ServiceStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colors: Record<ServiceStatus, string> = {
    operational: 'bg-emerald-500',
    degraded: 'bg-amber-500',
    down: 'bg-red-500'
  };

  return (
    <div 
      className={`w-2 h-2 rounded-full ${colors[status]}`}
      aria-label={`Status: ${status}`}
    />
  );
}