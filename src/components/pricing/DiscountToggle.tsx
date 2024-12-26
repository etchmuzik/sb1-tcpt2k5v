import React from 'react';

interface DiscountToggleProps {
  billingInterval: 'month' | 'year';
  onChange: (interval: 'month' | 'year') => void;
  disabled?: boolean;
}

export default function DiscountToggle({ 
  billingInterval, 
  onChange,
  disabled = false 
}: DiscountToggleProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) {
        onChange(billingInterval === 'month' ? 'year' : 'month');
      }
    }
  };

  return (
    <div className="flex justify-center items-center gap-6 mb-12" role="group" aria-label="Billing interval selection">
      {/* Monthly Label */}
      <span 
        className={`text-sm font-medium transition-colors ${
          billingInterval === 'month' ? 'text-white' : 'text-zinc-400'
        }`}
      >
        Monthly
      </span>
      
      {/* Toggle Button */}
      <button
        role="switch"
        aria-checked={billingInterval === 'year'}
        aria-label="Toggle yearly billing"
        onClick={() => !disabled && onChange(billingInterval === 'month' ? 'year' : 'month')}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`
          relative w-14 h-7 rounded-full transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-teal
          disabled:opacity-50 disabled:cursor-not-allowed
          ${billingInterval === 'year' ? 'bg-teal' : 'bg-zinc-700'}
        `}
      >
        {/* Toggle Knob */}
        <span 
          className={`
            absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm
            transform transition-transform duration-200 ease-in-out
            ${billingInterval === 'year' ? 'translate-x-7' : 'translate-x-0'}
            ${disabled ? 'bg-zinc-200' : ''}
          `}
          aria-hidden="true"
        />
      </button>

      {/* Yearly Label with Discount Badge */}
      <div className="flex items-center gap-2">
        <span 
          className={`text-sm font-medium transition-colors ${
            billingInterval === 'year' ? 'text-white' : 'text-zinc-400'
          }`}
        >
          Yearly
        </span>
        <span 
          className={`
            text-xs px-2 py-0.5 rounded-full whitespace-nowrap
            transition-colors duration-200
            ${billingInterval === 'year' 
              ? 'bg-teal/20 text-teal' 
              : 'bg-zinc-800 text-zinc-400'
            }
          `}
        >
          Save 20%
        </span>
      </div>
    </div>
  );
}