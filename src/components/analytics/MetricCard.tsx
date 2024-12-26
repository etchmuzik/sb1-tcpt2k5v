import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export default function MetricCard({ title, value, change, icon: Icon, trend }: MetricCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-zinc-400">{title}</span>
        <Icon className="h-5 w-5 text-zinc-400" />
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white">{value}</span>
        <span className={`text-sm ${
          trend === 'up' ? 'text-emerald-500' : 'text-red-500'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}