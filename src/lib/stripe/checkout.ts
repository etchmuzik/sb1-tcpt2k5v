import { loadStripe } from '@stripe/stripe-js';
import type { CheckoutOptions } from './types';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export async function createCheckoutSession(options: CheckoutOptions) {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    const { error } = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [{
        price: options.priceId,
        quantity: 1
      }],
      successUrl: `${window.location.origin}/payment/success`,
      cancelUrl: `${window.location.origin}/pricing`,
      customerEmail: options.customerEmail
    });

    if (error) throw error;
  } catch (err) {
    console.error('Payment error:', err);
    throw err;
  }
}