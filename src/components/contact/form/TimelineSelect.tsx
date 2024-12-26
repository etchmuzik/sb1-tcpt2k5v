import React from 'react';

const timelines = [
  { value: 'immediate', label: 'Immediate (within 1 month)' },
  { value: 'quarter', label: 'This Quarter' },
  { value: 'halfyear', label: 'Next 6 months' },
  { value: 'year', label: 'Within a year' },
  { value: 'planning', label: 'Just planning' }
];

interface TimelineSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TimelineSelect({ value, onChange }: TimelineSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-400 mb-2">
        Implementation Timeline
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
          focus:outline-none focus:border-teal transition-colors"
      >
        <option value="">Select timeline</option>
        {timelines.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}