import { loadStripe } from '@stripe/stripe-js';

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripeKey) {
  throw new Error('Missing Stripe publishable key');
}

const stripePromise = loadStripe(stripeKey);

export async function createCheckoutSession(priceId: string) {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    // For demo purposes, redirect to success page
    // In production, this would make an API call to create a checkout session
    window.location.href = '/payment-success';
    
  } catch (err) {
    console.error('Payment error:', err);
    throw err;
  }
}