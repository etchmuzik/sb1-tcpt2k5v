import React from 'react';
import { CreditCard, Bitcoin } from 'lucide-react';

interface PricingControlsProps {
  billingInterval: 'month' | 'year';
  setBillingInterval: (interval: 'month' | 'year') => void;
  showCryptoModal: () => void;
}

export default function PricingControls({ 
  billingInterval, 
  setBillingInterval,
  showCryptoModal
}: PricingControlsProps) {
  return (
    <div className="flex flex-col items-center gap-8 mb-12">
      {/* Billing Toggle */}
      <div className="flex items-center gap-4">
        <span className={`text-sm ${billingInterval === 'month' ? 'text-white' : 'text-zinc-400'}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingInterval(billingInterval === 'month' ? 'year' : 'month')}
          className="relative w-14 h-7 bg-zinc-700 rounded-full transition-colors hover:bg-zinc-600"
          aria-label="Toggle billing interval"
        >
          <div className="absolute inset-1 flex items-center">
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                billingInterval === 'year' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </div>
        </button>
        <span className={`text-sm ${billingInterval === 'year' ? 'text-white' : 'text-zinc-400'}`}>
          Yearly (Save 20%)
        </span>
      </div>

      {/* Payment Options */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-lg text-white 
            hover:bg-zinc-700 transition-all duration-200 border border-transparent
            hover:border-teal group"
        >
          <CreditCard className="h-5 w-5 text-teal group-hover:scale-110 transition-transform" />
          <span>Card Payment</span>
        </button>
        <button
          onClick={showCryptoModal}
          className="flex items-center gap-2 px-6 py-3 bg-zinc-800 rounded-lg text-white 
            hover:bg-zinc-700 transition-all duration-200 border border-transparent
            hover:border-teal group"
        >
          <Bitcoin className="h-5 w-5 text-teal group-hover:scale-110 transition-transform" />
          <span>Crypto Payment (10% off)</span>
        </button>
      </div>
    </div>
  );
}