import React from 'react';

interface BillingToggleProps {
  billingInterval: 'month' | 'year';
  onChange: (interval: 'month' | 'year') => void;
}

export default function BillingToggle({ billingInterval, onChange }: BillingToggleProps) {
  return (
    <div className="flex justify-center items-center gap-4 mb-12">
      <span 
        className={`text-sm font-medium transition-colors ${
          billingInterval === 'month' ? 'text-white' : 'text-zinc-400'
        }`}
      >
        Monthly
      </span>
      
      <button
        onClick={() => onChange(billingInterval === 'month' ? 'year' : 'month')}
        className="relative w-14 h-7 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-black"
        style={{ backgroundColor: billingInterval === 'year' ? '#47bda4' : '#3f3f46' }}
        aria-pressed={billingInterval === 'year'}
        aria-label="Toggle billing interval"
      >
        <div 
          className={`absolute h-5 w-5 mx-1 my-1 bg-white rounded-full shadow-lg transform transition-transform duration-200 ${
            billingInterval === 'year' ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </button>

      <div className="flex items-center gap-2">
        <span 
          className={`text-sm font-medium transition-colors ${
            billingInterval === 'year' ? 'text-white' : 'text-zinc-400'
          }`}
        >
          Yearly
        </span>
        <span className="text-xs text-teal bg-teal/10 px-2 py-0.5 rounded-full">
          Save 20%
        </span>
      </div>
    </div>
  );
}