import React, { useState } from 'react';
import PricingTier from '../components/pricing/PricingTier';
import DiscountToggle from '../components/pricing/DiscountToggle';
import ROICalculator from '../components/pricing/ROICalculator';
import { plans } from '../data/pricing/plans';

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month');

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple Pricing
          </h1>
          <p className="text-xl text-zinc-400">
            Choose the plan that fits your needs
          </p>
        </div>
        
        {/* Billing Toggle */}
        <DiscountToggle 
          billingInterval={billingInterval}
          onChange={setBillingInterval}
        />

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <PricingTier
              key={plan.id}
              plan={plan}
              billingInterval={billingInterval}
              popular={plan.id === 'professional'}
            />
          ))}
        </div>

        {/* ROI Calculator */}
        <ROICalculator />
      </div>
    </div>
  );
}