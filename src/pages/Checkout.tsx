import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Shield, CreditCard } from 'lucide-react';
import Button from '../components/common/Button';
import { createCheckoutSession } from '../lib/stripe/checkout';
import { plans } from '../data/pricing/plans';
import { useNotificationStore } from '../hooks/useNotification';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addNotification } = useNotificationStore();
  const [loading, setLoading] = useState(false);

  // Get plan details from location state
  const { planId, interval } = location.state || {};
  const plan = plans.find(p => p.id === planId);

  if (!plan) {
    navigate('/pricing');
    return null;
  }

  const handleCheckout = async () => {
    try {
      setLoading(true);
      await createCheckoutSession({
        priceId: plan.priceId,
        successUrl: '/payment/success',
        cancelUrl: '/pricing'
      });
    } catch (error) {
      addNotification('Payment failed. Please try again.', 'error');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Complete Your Purchase</h1>
          <p className="text-xl text-zinc-400">You're just a few steps away from getting started</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Shield className="h-5 w-5 text-teal" />
            <span className="text-sm text-zinc-400">Secure checkout powered by Stripe</span>
          </div>
        </div>

        {/* Plan Summary */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="text-zinc-400">{plan.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {plan.currency} {(interval === 'year' ? plan.yearlyPrice : plan.price)?.toLocaleString()}
                <span className="text-sm font-normal text-zinc-400">/{interval}</span>
              </div>
              {interval === 'year' && (
                <p className="text-sm text-teal">Save 20% with annual billing</p>
              )}
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <h4 className="text-sm font-medium text-white mb-4">Included Features:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-zinc-400">
                  <span className="mr-2 text-teal">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Button */}
        <Button
          variant="minimal"
          icon={CreditCard}
          onClick={handleCheckout}
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Processing...' : `Pay ${plan.currency} ${(interval === 'year' ? plan.yearlyPrice : plan.price)?.toLocaleString()}`}
        </Button>

        {/* Back Link */}
        <button
          onClick={() => navigate('/pricing')}
          className="block w-full text-center mt-4 text-sm text-zinc-400 hover:text-white"
        >
          Back to Pricing
        </button>
      </div>
    </div>
  );
}