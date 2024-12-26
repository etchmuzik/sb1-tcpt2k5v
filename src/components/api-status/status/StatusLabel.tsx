import React from 'react';
import { ServiceStatus } from '../../../data/api-status';

interface StatusLabelProps {
  status: ServiceStatus;
}

export default function StatusLabel({ status }: StatusLabelProps) {
  return (
    <span className="text-sm text-zinc-400">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}