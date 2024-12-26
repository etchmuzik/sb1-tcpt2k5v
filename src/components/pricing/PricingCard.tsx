import React from 'react';
import { Check } from 'lucide-react';
import Button from '../common/Button';
import { createCheckoutSession } from '../../lib/stripe';
import { useNotificationStore } from '../../hooks/useNotification';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  priceId: string;
  popular?: boolean;
}

export default function PricingCard({ name, price, features, priceId, popular }: PricingCardProps) {
  const { addNotification } = useNotificationStore();
  const [loading, setLoading] = React.useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      await createCheckoutSession({
        priceId,
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
    <div className={`bg-black border rounded-xl p-8 ${
      popular ? 'border-emerald-500' : 'border-zinc-800'
    }`}>
      {/* Rest of the component remains the same */}
    </div>
  );
}