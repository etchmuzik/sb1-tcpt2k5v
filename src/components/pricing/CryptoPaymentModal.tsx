import React from 'react';
import { Bitcoin, X } from 'lucide-react';
import Button from '../common/Button';

interface CryptoPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CryptoPaymentModal({ isOpen, onClose, onConfirm }: CryptoPaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative bg-zinc-900 rounded-xl p-8 max-w-md w-full mx-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <Bitcoin className="h-8 w-8 text-emerald-500" />
          <h3 className="text-xl font-semibold text-white">Crypto Payment</h3>
        </div>

        <p className="text-zinc-400 mb-6">
          Pay with cryptocurrency and get an instant 10% discount on your subscription.
          We accept BTC, ETH, and USDT.
        </p>

        <div className="space-y-4">
          <Button
            variant="minimal"
            className="w-full bg-emerald-500"
            onClick={onConfirm}
          >
            Continue with Crypto
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}