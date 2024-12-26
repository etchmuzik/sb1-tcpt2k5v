import React from 'react';
import MetricCard from './metrics/MetricCard';
import { metrics } from '../../data/api-status';

export default function MetricsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}