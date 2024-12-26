import React from 'react';

interface StatsProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-teal mb-2">{stat.value}</div>
          <div className="text-zinc-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}