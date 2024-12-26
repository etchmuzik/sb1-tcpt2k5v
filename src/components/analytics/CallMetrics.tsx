import React from 'react';

const metrics = [
  { label: 'Connected', value: 78, color: 'bg-emerald-500' },
  { label: 'No Answer', value: 15, color: 'bg-yellow-500' },
  { label: 'Failed', value: 7, color: 'bg-red-500' }
];

export default function CallMetrics() {
  return (
    <div className="space-y-4">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-zinc-400">{metric.label}</span>
            <span className="text-white">{metric.value}%</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${metric.color} rounded-full`}
              style={{ width: `${metric.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}