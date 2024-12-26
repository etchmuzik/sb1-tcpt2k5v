import React from 'react';

type TrendType = 'positive' | 'negative' | 'neutral';

interface MetricTrendProps {
  trend: string;
  type: TrendType;
}

export default function MetricTrend({ trend, type }: MetricTrendProps) {
  const colors: Record<TrendType, string> = {
    positive: 'text-emerald-500',
    negative: 'text-red-500',
    neutral: 'text-zinc-400'
  };

  return (
    <span className={`text-sm ${colors[type]}`}>
      {trend}
    </span>
  );
}