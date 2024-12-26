import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface CheckoutOptions {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}

export function useStripeCheckout() {
  const [loading, setLoading] = useState(false);

  const initiateCheckout = async ({ priceId, successUrl, cancelUrl }: CheckoutOptions) => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'subscription',
        successUrl,
        cancelUrl,
      });

      if (error) throw error;
    } catch (err) {
      console.error('Checkout error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { initiateCheckout, loading };
}