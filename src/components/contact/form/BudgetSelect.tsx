import React from 'react';

const budgetRanges = [
  { value: '5000-10000', label: 'AED 5,000 - 10,000' },
  { value: '10000-25000', label: 'AED 10,000 - 25,000' },
  { value: '25000-50000', label: 'AED 25,000 - 50,000' },
  { value: '50000-100000', label: 'AED 50,000 - 100,000' },
  { value: '100000+', label: 'AED 100,000+' }
];

interface BudgetSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BudgetSelect({ value, onChange }: BudgetSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-400 mb-2">
        Estimated Budget <span className="text-red-500">*</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
          focus:outline-none focus:border-teal transition-colors"
      >
        <option value="">Select budget range</option>
        {budgetRanges.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}