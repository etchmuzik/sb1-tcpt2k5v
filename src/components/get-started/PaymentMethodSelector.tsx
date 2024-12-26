import React from 'react';
import { CreditCard, Bitcoin } from 'lucide-react';

interface PaymentMethodSelectorProps {
  onSelect: (method: 'card' | 'crypto') => void;
  disabled?: boolean;
}

export default function PaymentMethodSelector({ onSelect, disabled }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">Select Payment Method</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onSelect('card')}
          disabled={disabled}
          className="flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl
            hover:border-[#47bda4] transition-colors text-left"
        >
          <div className="p-3 bg-[#47bda4]/10 rounded-lg">
            <CreditCard className="h-6 w-6 text-[#47bda4]" />
          </div>
          <div>
            <div className="font-medium text-white">Credit Card</div>
            <div className="text-sm text-zinc-400">Secure payment via Stripe</div>
          </div>
        </button>

        <button
          onClick={() => onSelect('crypto')}
          disabled={disabled}
          className="flex items-center gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-xl
            hover:border-[#47bda4] transition-colors text-left"
        >
          <div className="p-3 bg-[#47bda4]/10 rounded-lg">
            <Bitcoin className="h-6 w-6 text-[#47bda4]" />
          </div>
          <div>
            <div className="font-medium text-white">Cryptocurrency</div>
            <div className="text-sm text-zinc-400">Get 10% off with crypto</div>
          </div>
        </button>
      </div>

      <div className="text-sm text-zinc-400 text-center">
        By proceeding, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
}