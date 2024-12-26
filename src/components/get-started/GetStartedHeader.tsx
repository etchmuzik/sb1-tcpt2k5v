import React from 'react';
import { Shield } from 'lucide-react';

export default function GetStartedHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">
        Complete Your Purchase
      </h1>
      <p className="text-xl text-zinc-400 mb-6">
        You're just a few steps away from getting started
      </p>
      <div className="flex items-center justify-center text-sm text-zinc-400">
        <Shield className="h-5 w-5 text-[#47bda4] mr-2" />
        Secure checkout powered by Stripe
      </div>
    </div>
  );
}