import React from 'react';

export default function TimelineChart() {
  return (
    <div className="relative h-64">
      <div className="absolute inset-0 flex items-end">
        {/* Sample bars - in production, these would be dynamic based on data */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="flex-1 mx-1"
            style={{ height: `${Math.random() * 100}%` }}
          >
            <div className="h-full bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t-sm" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />
    </div>
  );
}