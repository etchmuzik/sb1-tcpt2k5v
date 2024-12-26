import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createCheckoutSession } from '../lib/stripe/checkout';
import { useNotificationStore } from '../hooks/useNotification';
import GetStartedHeader from '../components/get-started/GetStartedHeader';
import PlanSummary from '../components/get-started/PlanSummary';
import PaymentMethodSelector from '../components/get-started/PaymentMethodSelector';
import Button from '../components/common/Button';

export default function GetStarted() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addNotification } = useNotificationStore();
  const [loading, setLoading] = useState(false);

  // Get plan details from location state
  const { planId, interval } = location.state || {};

  if (!planId) {
    navigate('/pricing');
    return null;
  }

  const handleCheckout = async (paymentMethod: 'card' | 'crypto') => {
    try {
      setLoading(true);

      if (paymentMethod === 'crypto') {
        // Handle crypto payment flow
        navigate('/crypto-payment', { state: { planId, interval } });
        return;
      }

      await createCheckoutSession({
        priceId: planId,
        successUrl: '/payment/success',
        cancelUrl: '/pricing'
      });
    } catch (error) {
      addNotification('Failed to initiate checkout. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <GetStartedHeader />
        
        <div className="space-y-8">
          <PlanSummary planId={planId} interval={interval} />
          
          <PaymentMethodSelector
            onSelect={handleCheckout}
            disabled={loading}
          />
          
          <div className="flex justify-end">
            <Button
              variant="secondary"
              onClick={() => navigate('/pricing')}
              className="mr-4"
            >
              Back to Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}