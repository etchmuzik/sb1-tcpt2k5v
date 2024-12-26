import React from 'react';
import { TrendingUp, Clock, DollarSign, Heart } from 'lucide-react';

const metrics = [
  {
    title: 'Efficiency Gains',
    value: '73%',
    description: 'Average increase in operational efficiency',
    icon: TrendingUp
  },
  {
    title: 'Time Saved',
    value: '12hrs',
    description: 'Weekly hours saved per employee',
    icon: Clock
  },
  {
    title: 'Cost Reduction',
    value: '45%',
    description: 'Average reduction in operational costs',
    icon: DollarSign
  },
  {
    title: 'Satisfaction',
    value: '96%',
    description: 'Client satisfaction rate',
    icon: Heart
  }
];

export default function SuccessMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.title} className="text-center p-6 bg-black rounded-xl border border-zinc-800">
            <div className="inline-flex p-3 bg-emerald-500/10 rounded-full mb-4">
              <Icon className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
            <h3 className="text-lg font-medium text-zinc-200 mb-2">{metric.title}</h3>
            <p className="text-sm text-zinc-400">{metric.description}</p>
          </div>
        );
      })}
    </div>
  );
}