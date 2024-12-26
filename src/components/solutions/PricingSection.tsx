import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { plans } from '../../data/pricing/plans';

export default function PricingSection() {
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month');
  const navigate = useNavigate();

  const handleGetStarted = (planId: string) => {
    if (planId === 'enterprise') {
      navigate('/request-quote', { 
        state: { planId, planName: 'Enterprise' }
      });
      return;
    }
    
    navigate('/checkout', { 
      state: { planId, interval: billingInterval }
    });
  };

  return (
    <div>
      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
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

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const price = billingInterval === 'year' ? plan.yearlyPrice : plan.price;
          return (
            <div
              key={plan.id}
              className={`bg-black border ${
                plan.id === 'professional' ? 'border-teal' : 'border-zinc-800'
              } rounded-xl p-8 ${plan.id === 'professional' ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-zinc-400 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                {price ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      {plan.currency} {price?.toLocaleString()}
                    </span>
                    <span className="text-zinc-400 ml-2">/{billingInterval}</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-white">Contact Sales</div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-zinc-300">
                    <span className="mr-2 text-teal">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleGetStarted(plan.id)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  plan.id === 'professional'
                    ? 'bg-teal text-black hover:bg-teal-hover'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}