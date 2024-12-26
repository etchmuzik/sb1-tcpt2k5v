import React from 'react';
import { LucideIcon } from 'lucide-react';
import MetricTrend from './MetricTrend';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
}

export default function MetricCard({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  trendType 
}: MetricCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Icon className="h-5 w-5 text-emerald-500" />
        </div>
        <span className="text-zinc-400">{label}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white">{value}</span>
        <MetricTrend trend={trend} type={trendType} />
      </div>
    </div>
  );
}